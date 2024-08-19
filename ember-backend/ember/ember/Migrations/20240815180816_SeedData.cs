using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace ember.Migrations
{
    /// <inheritdoc />
    public partial class SeedData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProductImage_Products_ProductId",
                table: "ProductImage");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ProductImage",
                table: "ProductImage");

            migrationBuilder.RenameTable(
                name: "ProductImage",
                newName: "Images");

            migrationBuilder.RenameIndex(
                name: "IX_ProductImage_ProductId",
                table: "Images",
                newName: "IX_Images_ProductId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Images",
                table: "Images",
                column: "Id");

            migrationBuilder.InsertData(
                table: "Categories",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "Featured" },
                    { 2, "Living Room" },
                    { 3, "Bedroom" },
                    { 4, "Dining" },
                    { 5, "Office" }
                });

            migrationBuilder.InsertData(
                table: "Orders",
                columns: new[] { "Id", "CustomerEmail", "CustomerName", "OrderDate", "TotalAmount" },
                values: new object[,]
                {
                    { 1, "john.doe@example.com", "John Doe", new DateTime(2024, 8, 5, 18, 8, 16, 266, DateTimeKind.Utc).AddTicks(1690), 1399.98m },
                    { 2, "jane.smith@example.com", "Jane Smith", new DateTime(2024, 8, 10, 18, 8, 16, 266, DateTimeKind.Utc).AddTicks(1710), 1099.98m }
                });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "CategoryId", "Description", "Image", "Name", "Price", "SKU", "Stock" },
                values: new object[,]
                {
                    { 1, 1, "", "", "Sofa", 799m, "SOFA-003", 20 },
                    { 2, 1, "", "", "Armchair", 399m, "ARM-CHA-001", 90 },
                    { 3, 1, "", "", "Coffee Table", 199m, "COF-TAB-006", 120 },
                    { 4, 1, "", "", "Dining Table", 599m, "DIN-TAB-001", 30 },
                    { 5, 1, "", "", "Bookshelf", 349m, "BKS-003", 100 },
                    { 6, 1, "", "", "Floor Lamp", 129m, "FLR-121", 179 },
                    { 7, 2, "", "", "Sectional Sofa", 1299m, "SOF-001", 19 },
                    { 8, 2, "", "", "TV Stand", 249m, "TVS-011", 240 },
                    { 9, 2, "", "", "Side Table", 99m, "SDT-101", 119 },
                    { 10, 2, "", "", "Ottoman", 149m, "OTT-001", 109 },
                    { 11, 2, "", "", "Wall Art", 79m, "ART-021", 190 },
                    { 12, 2, "", "", "Area Rug", 199m, "RUG-001", 160 },
                    { 13, 3, "", "", "Bed Frame", 599m, "BED-001", 29 },
                    { 14, 3, "", "", "Nightstand", 129m, "NST-001", 109 },
                    { 15, 3, "", "", "Dresser", 449m, "DRS-001", 49 },
                    { 16, 3, "", "", "Wardrobe", 699m, "WAD-001", 99 },
                    { 17, 3, "", "", "Vanity", 299m, "VAN-001", 69 },
                    { 18, 3, "", "", "Bedside Lamp", 59m, "BDL-001", 139 },
                    { 19, 4, "", "", "Dining Chair", 99m, "DIN-CHA-001", 199 },
                    { 20, 4, "", "", "Bar Stool", 79m, "BAR-STL-001", 149 },
                    { 21, 4, "", "", "Buffet", 399m, "BUF-001", 59 },
                    { 22, 4, "", "", "China Cabinet", 599m, "CHI-CAB-001", 39 },
                    { 23, 4, "", "", "Dining Bench", 129m, "DIN-BCH-001", 89 },
                    { 24, 4, "", "", "Dining Table", 599m, "DIN-TAB-001", 29 },
                    { 25, 5, "", "", "Desk", 299m, "DSK-001", 99 },
                    { 26, 5, "", "", "Office Chair", 199m, "OFC-CHA-001", 199 },
                    { 27, 5, "", "", "Bookshelf", 349m, "BKS-001", 79 },
                    { 28, 5, "", "", "File Cabinet", 149m, "FIL-CAB-001", 129 },
                    { 29, 5, "", "", "Desk Lamp", 59m, "DSK-LMP-001", 159 },
                    { 30, 5, "", "", "Office Accessories", 29m, "OFC-ACC-001", 199 }
                });

            migrationBuilder.InsertData(
                table: "Images",
                columns: new[] { "Id", "AltText", "ImageUrl", "ProductId" },
                values: new object[,]
                {
                    { 1, "", "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/sofa.jpg", 1 },
                    { 2, "", "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/armchair.jpg", 2 },
                    { 3, "", "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/coffee-table.jpg", 3 },
                    { 4, "", "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/dining-table.jpg", 4 },
                    { 5, "", "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/bookshelf.jpg", 5 },
                    { 6, "", "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/floor-lamp.jpg", 6 },
                    { 7, "", "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/sectional-sofa.jpg", 7 },
                    { 8, "", "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/tv-stand.jpg", 8 },
                    { 9, "", "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/side-table.jpg", 9 },
                    { 10, "", "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/ottoman.jpg", 10 },
                    { 11, "", "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/wall-art.jpg", 11 },
                    { 12, "", "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/area-rug.jpg", 12 },
                    { 13, "", "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/bed-frame.jpg", 13 },
                    { 14, "", "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/nightstand.jpg", 14 },
                    { 15, "", "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/dresser.jpg", 15 },
                    { 16, "", "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/wardrobe.jpg", 16 },
                    { 17, "", "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/vanity.jpg", 17 },
                    { 18, "", "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/bedside-lamp.jpg", 18 },
                    { 19, "", "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/dining-chair.jpg", 19 },
                    { 20, "", "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/bar-stool.jpg", 20 },
                    { 21, "", "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/buffet.jpg", 21 },
                    { 22, "", "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/china-cabinet.jpg", 22 },
                    { 23, "", "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/dining-bench.jpg", 23 },
                    { 24, "", "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/dining-table.jpg", 24 },
                    { 25, "", "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/office-desk.jpg", 25 },
                    { 26, "", "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/office-chair.jpg", 26 },
                    { 27, "", "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/bookshelf.jpg", 27 },
                    { 28, "", "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/file-cabinet.jpg", 28 },
                    { 29, "", "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/desk-lamp.jpg", 29 },
                    { 30, "", "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/office-accessories.jpg", 30 }
                });

            migrationBuilder.InsertData(
                table: "OrderItems",
                columns: new[] { "Id", "OrderId", "Price", "ProductId", "Quantity" },
                values: new object[,]
                {
                    { 1, 1, 799m, 1, 1 },
                    { 2, 1, 399m, 2, 1 },
                    { 3, 2, 399m, 2, 1 },
                    { 4, 2, 199m, 3, 1 }
                });

            migrationBuilder.InsertData(
                table: "Ratings",
                columns: new[] { "Id", "ProductId", "UserId", "Value" },
                values: new object[,]
                {
                    { 1, 1, "", 4 },
                    { 2, 1, "", 5 },
                    { 3, 2, "", 5 },
                    { 4, 2, "", 4 },
                    { 5, 3, "", 3 },
                    { 6, 3, "", 5 },
                    { 7, 4, "", 4 },
                    { 8, 4, "", 3 },
                    { 9, 5, "", 5 },
                    { 10, 5, "", 3 },
                    { 11, 6, "", 4 },
                    { 12, 6, "", 5 },
                    { 13, 7, "", 5 },
                    { 14, 7, "", 5 },
                    { 15, 8, "", 4 },
                    { 16, 8, "", 4 },
                    { 17, 9, "", 3 },
                    { 18, 9, "", 5 },
                    { 19, 10, "", 5 },
                    { 20, 10, "", 2 },
                    { 21, 11, "", 4 },
                    { 22, 11, "", 4 },
                    { 23, 12, "", 5 },
                    { 24, 12, "", 5 },
                    { 25, 13, "", 4 },
                    { 26, 13, "", 5 },
                    { 27, 14, "", 5 },
                    { 28, 15, "", 4 },
                    { 29, 16, "", 3 },
                    { 30, 17, "", 5 },
                    { 31, 18, "", 4 },
                    { 32, 19, "", 5 },
                    { 33, 20, "", 4 },
                    { 34, 21, "", 3 },
                    { 35, 22, "", 5 },
                    { 36, 23, "", 4 },
                    { 37, 24, "", 5 },
                    { 38, 25, "", 4 },
                    { 39, 26, "", 5 },
                    { 40, 27, "", 4 },
                    { 41, 28, "", 3 },
                    { 42, 29, "", 5 },
                    { 43, 30, "", 4 }
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Images_Products_ProductId",
                table: "Images",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Images_Products_ProductId",
                table: "Images");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Images",
                table: "Images");

            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 15);

            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 16);

            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 17);

            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 18);

            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 19);

            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 20);

            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 21);

            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 22);

            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 23);

            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 24);

            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 25);

            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 26);

            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 27);

            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 28);

            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 29);

            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 30);

            migrationBuilder.DeleteData(
                table: "OrderItems",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "OrderItems",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "OrderItems",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "OrderItems",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: 15);

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: 16);

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: 17);

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: 18);

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: 19);

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: 20);

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: 21);

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: 22);

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: 23);

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: 24);

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: 25);

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: 26);

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: 27);

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: 28);

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: 29);

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: 30);

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: 31);

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: 32);

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: 33);

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: 34);

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: 35);

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: 36);

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: 37);

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: 38);

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: 39);

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: 40);

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: 41);

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: 42);

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: 43);

            migrationBuilder.DeleteData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 15);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 16);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 17);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 18);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 19);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 20);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 21);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 22);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 23);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 24);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 25);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 26);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 27);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 28);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 29);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 30);

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.RenameTable(
                name: "Images",
                newName: "ProductImage");

            migrationBuilder.RenameIndex(
                name: "IX_Images_ProductId",
                table: "ProductImage",
                newName: "IX_ProductImage_ProductId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ProductImage",
                table: "ProductImage",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ProductImage_Products_ProductId",
                table: "ProductImage",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
