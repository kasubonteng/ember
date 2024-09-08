import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { ChevronDown, Star, X } from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter, useSearchParams } from "next/navigation";
import { formatCurrency } from "@/lib/utils";

const categories = [
  "All",
  "Featured",
  "Living Room",
  "Bedroom",
  "Dining",
  "Office",
];
const popularityOptions = ["Any", "Newest", "Most Popular", "Least Popular"];
const ratingOptions = [
  { label: "Any", value: "0" },
  { label: "3+ Stars", value: "3" },
  { label: "4+ Stars", value: "4" },
  { label: "5 Stars", value: "5" },
];

const Filter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // State for filter values
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || "",
  );
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "All",
  );

  //  TODO: FIX PRICE RANGE FILTER
  const [priceRange, setPriceRange] = useState([
    parseInt(searchParams.get("minPrice") || "0"),
    parseInt(searchParams.get("maxPrice") || "1000"),
  ]);
  const [popularity, setPopularity] = useState(
    searchParams.get("popularity") || "Any",
  );
  const [rating, setRating] = useState(searchParams.get("rating") || "0");

  // State for filter visibility
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  // State to check if component is initialized
  const [isInitialized, setIsInitialized] = useState(false);

  // Function to update URL based on filter values
  const updateURL = () => {
    // Prevent updating URL on initial render
    if (!isInitialized) return;

    const params = new URLSearchParams();
    if (selectedCategory !== "All")
      params.set("category", selectedCategory.toLowerCase());
    if (priceRange[0] !== 0) params.set("minPrice", priceRange[0].toString());
    if (priceRange[1] !== 1000)
      params.set("maxPrice", priceRange[1].toString());
    if (popularity !== "Any")
      params.set("popularity", popularity.toLowerCase());
    if (rating !== "0") params.set("rating", rating);
    if (searchTerm) params.set("search", searchTerm.toLowerCase());

    router.push(`/shop/products?${params.toString()}`, { scroll: false });
  };

  // Initialize component
  useEffect(() => {
    setIsInitialized(true);
  }, []);

  // Update URL on filter change
  useEffect(
    () => {
      if (isInitialized) {
        updateURL();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      selectedCategory,
      priceRange,
      popularity,
      rating,
      searchTerm,
      isInitialized,
    ],
  );

  // Animation variants
  const filterContainerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
  };

  const filterItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const getActiveFilters = () => {
    const filters = [];
    if (selectedCategory !== "All") {
      filters.push({ type: "category", value: selectedCategory });
    }
    if (priceRange[0] !== 0 || priceRange[1] !== 1000) {
      filters.push({
        type: "price",
        value: `${formatCurrency(priceRange[0])} - ${formatCurrency(
          priceRange[1],
        )}`,
      });
    }
    if (popularity !== "Any") {
      filters.push({ type: "popularity", value: popularity });
    }
    if (rating !== "0") {
      filters.push({ type: "ratings", value: rating });
    }
    if (searchTerm) {
      filters.push({ type: "search", value: searchTerm });
    }
    return filters;
  };

  const removeFilter = (filterType: string) => {
    switch (filterType) {
      case "category":
        setSelectedCategory("All");
        break;
      case "price":
        setPriceRange([0, 1000]);
        break;
      case "popularity":
        setPopularity("Any");
      case "ratings":
        setRating("0");
      case "search":
        setSearchTerm("");
      default:
        break;
    }
  };
  return (
    <div className="mb-8 w-full">
      <motion.div
        className="mb-4 flex flex-col items-start justify-start sm:flex-row sm:items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mx-4 mb-2 w-[344px] rounded-full border border-primary/40 bg-white/40 px-6 py-5 text-black outline-none backdrop-blur-sm transition-all duration-300 placeholder:text-base placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0 sm:mb-0"
        />
        <motion.button
          className="mb-2 flex items-center rounded-xl bg-primary px-4 py-2 text-white sm:mb-0"
          onClick={() => setIsFiltersVisible(!isFiltersVisible)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="mr-2">Filters</span>
          <motion.div
            animate={{ rotate: isFiltersVisible ? 180 : 0 }}
            transition={{ duration: 0.1 }}
            className="flex items-center"
          >
            <ChevronDown size={18} />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {getActiveFilters().map((filter) => (
            <motion.div
              key={filter.type}
              className="mb-2 ml-2 flex items-center rounded-full border border-primary bg-primary/20 p-3 text-sm text-gray-800 backdrop-blur-sm sm:mb-0"
              variants={tagVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              layout
            >
              <span>{filter.value}</span>
              <button
                onClick={() => removeFilter(filter.type)}
                className="ml-2 text-gray-600 hover:text-gray-800"
              >
                <X size={14} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {isFiltersVisible && (
          <motion.div
            className="rounded-md bg-gray-100 p-4"
            variants={filterContainerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="grid grid-cols-1 place-items-center items-center gap-6 md:grid-cols-4">
              <motion.div
                variants={filterItemVariants}
                transition={{ delay: 0.2 }}
                className="w-full"
              >
                <Label className="mb-2 block text-base font-medium text-gray-700">
                  Price Range
                </Label>
                <Slider
                  min={0}
                  max={1000}
                  step={10}
                  value={priceRange}
                  onValueChange={(value) => setPriceRange(value)}
                  className="w-full"
                />
                <div className="mt-2 flex justify-between text-sm text-gray-600">
                  <span>{formatCurrency(priceRange[0])}</span>
                  <span>{formatCurrency(priceRange[1])}</span>
                </div>
              </motion.div>

              <motion.div
                variants={filterItemVariants}
                transition={{ delay: 0.1 }}
                className="w-full"
              >
                <Label className="mb-2 block text-base font-medium text-gray-700">
                  Category
                </Label>
                <Select
                  value={selectedCategory}
                  onValueChange={(value) => setSelectedCategory(value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </motion.div>

              <motion.div
                variants={filterItemVariants}
                transition={{ delay: 0.3 }}
                className="w-full"
              >
                <Label className="mb-2 block text-base font-medium text-gray-700">
                  Popularity
                </Label>
                <Select
                  value={popularity}
                  onValueChange={(value) => setPopularity(value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Popularity" />
                  </SelectTrigger>
                  <SelectContent>
                    {popularityOptions.map((popularity) => (
                      <SelectItem key={popularity} value={popularity}>
                        {popularity}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </motion.div>

              <motion.div
                variants={filterItemVariants}
                transition={{ delay: 0.3 }}
                className="w-full"
              >
                <Label className="mb-2 block text-base font-medium text-gray-700">
                  Rating
                </Label>
                <Select
                  value={rating}
                  onValueChange={(value) => setRating(value)}
                  defaultValue="0"
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Rating" />
                  </SelectTrigger>
                  <SelectContent>
                    {ratingOptions.map((option) => (
                      <SelectItem key={option.label} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Filter;
