using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ember.Migrations
{
    /// <inheritdoc />
    public partial class ChangeImagesToUseSupabaseS3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 1,
                column: "ImageUrl",
                value: "https://hnjusjswsficvzglhkfw.supabase.co/storage/v1/object/public/ember/sofa.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 2,
                column: "ImageUrl",
                value: "https://hnjusjswsficvzglhkfw.supabase.co/storage/v1/object/public/ember/armchair.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 3,
                column: "ImageUrl",
                value: "https://hnjusjswsficvzglhkfw.supabase.co/storage/v1/object/public/ember/coffee-table.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 4,
                column: "ImageUrl",
                value: "https://hnjusjswsficvzglhkfw.supabase.co/storage/v1/object/public/ember/dining-table.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 5,
                column: "ImageUrl",
                value: "https://hnjusjswsficvzglhkfw.supabase.co/storage/v1/object/public/ember/bookshelf.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 6,
                column: "ImageUrl",
                value: "https://hnjusjswsficvzglhkfw.supabase.co/storage/v1/object/public/ember/floor-lamp.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 7,
                column: "ImageUrl",
                value: "https://hnjusjswsficvzglhkfw.supabase.co/storage/v1/object/public/ember/sectional-sofa.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 8,
                column: "ImageUrl",
                value: "https://hnjusjswsficvzglhkfw.supabase.co/storage/v1/object/public/ember/tv-stand.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 9,
                column: "ImageUrl",
                value: "https://hnjusjswsficvzglhkfw.supabase.co/storage/v1/object/public/ember/side-table.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 10,
                column: "ImageUrl",
                value: "https://hnjusjswsficvzglhkfw.supabase.co/storage/v1/object/public/ember/ottoman.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 11,
                column: "ImageUrl",
                value: "https://hnjusjswsficvzglhkfw.supabase.co/storage/v1/object/public/ember/wall-art.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 12,
                column: "ImageUrl",
                value: "https://hnjusjswsficvzglhkfw.supabase.co/storage/v1/object/public/ember/area-rug.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 13,
                column: "ImageUrl",
                value: "https://hnjusjswsficvzglhkfw.supabase.co/storage/v1/object/public/ember/bed-frame.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 14,
                column: "ImageUrl",
                value: "https://hnjusjswsficvzglhkfw.supabase.co/storage/v1/object/public/ember/nightstand.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 15,
                column: "ImageUrl",
                value: "https://hnjusjswsficvzglhkfw.supabase.co/storage/v1/object/public/ember/dresser.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 16,
                column: "ImageUrl",
                value: "https://hnjusjswsficvzglhkfw.supabase.co/storage/v1/object/public/ember/wardrobe.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 17,
                column: "ImageUrl",
                value: "https://hnjusjswsficvzglhkfw.supabase.co/storage/v1/object/public/ember/vanity.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 18,
                column: "ImageUrl",
                value: "https://hnjusjswsficvzglhkfw.supabase.co/storage/v1/object/public/ember/bedside-lamp.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 19,
                column: "ImageUrl",
                value: "https://hnjusjswsficvzglhkfw.supabase.co/storage/v1/object/public/ember/dining-chair.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 20,
                column: "ImageUrl",
                value: "https://hnjusjswsficvzglhkfw.supabase.co/storage/v1/object/public/ember/bar-stool.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 21,
                column: "ImageUrl",
                value: "https://hnjusjswsficvzglhkfw.supabase.co/storage/v1/object/public/ember/buffet.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 22,
                column: "ImageUrl",
                value: "https://hnjusjswsficvzglhkfw.supabase.co/storage/v1/object/public/ember/china-cabinet.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 23,
                column: "ImageUrl",
                value: "https://hnjusjswsficvzglhkfw.supabase.co/storage/v1/object/public/ember/dining-bench.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 24,
                column: "ImageUrl",
                value: "https://hnjusjswsficvzglhkfw.supabase.co/storage/v1/object/public/ember/dining-table.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 25,
                column: "ImageUrl",
                value: "https://hnjusjswsficvzglhkfw.supabase.co/storage/v1/object/public/ember/office-desk.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 26,
                column: "ImageUrl",
                value: "https://hnjusjswsficvzglhkfw.supabase.co/storage/v1/object/public/ember/office-chair.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 27,
                column: "ImageUrl",
                value: "https://hnjusjswsficvzglhkfw.supabase.co/storage/v1/object/public/ember/bookshelf.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 28,
                column: "ImageUrl",
                value: "https://hnjusjswsficvzglhkfw.supabase.co/storage/v1/object/public/ember/file-cabinet.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 29,
                column: "ImageUrl",
                value: "https://hnjusjswsficvzglhkfw.supabase.co/storage/v1/object/public/ember/desk-lamp.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 30,
                column: "ImageUrl",
                value: "https://hnjusjswsficvzglhkfw.supabase.co/storage/v1/object/public/ember/office-accessories.jpg");

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: 1,
                column: "OrderDate",
                value: new DateTime(2024, 8, 26, 12, 36, 0, 544, DateTimeKind.Utc).AddTicks(5610));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: 2,
                column: "OrderDate",
                value: new DateTime(2024, 8, 31, 12, 36, 0, 544, DateTimeKind.Utc).AddTicks(5620));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 1,
                column: "ImageUrl",
                value: "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/sofa.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 2,
                column: "ImageUrl",
                value: "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/armchair.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 3,
                column: "ImageUrl",
                value: "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/coffee-table.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 4,
                column: "ImageUrl",
                value: "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/dining-table.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 5,
                column: "ImageUrl",
                value: "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/bookshelf.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 6,
                column: "ImageUrl",
                value: "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/floor-lamp.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 7,
                column: "ImageUrl",
                value: "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/sectional-sofa.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 8,
                column: "ImageUrl",
                value: "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/tv-stand.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 9,
                column: "ImageUrl",
                value: "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/side-table.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 10,
                column: "ImageUrl",
                value: "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/ottoman.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 11,
                column: "ImageUrl",
                value: "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/wall-art.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 12,
                column: "ImageUrl",
                value: "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/area-rug.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 13,
                column: "ImageUrl",
                value: "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/bed-frame.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 14,
                column: "ImageUrl",
                value: "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/nightstand.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 15,
                column: "ImageUrl",
                value: "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/dresser.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 16,
                column: "ImageUrl",
                value: "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/wardrobe.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 17,
                column: "ImageUrl",
                value: "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/vanity.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 18,
                column: "ImageUrl",
                value: "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/bedside-lamp.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 19,
                column: "ImageUrl",
                value: "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/dining-chair.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 20,
                column: "ImageUrl",
                value: "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/bar-stool.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 21,
                column: "ImageUrl",
                value: "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/buffet.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 22,
                column: "ImageUrl",
                value: "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/china-cabinet.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 23,
                column: "ImageUrl",
                value: "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/dining-bench.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 24,
                column: "ImageUrl",
                value: "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/dining-table.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 25,
                column: "ImageUrl",
                value: "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/office-desk.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 26,
                column: "ImageUrl",
                value: "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/office-chair.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 27,
                column: "ImageUrl",
                value: "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/bookshelf.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 28,
                column: "ImageUrl",
                value: "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/file-cabinet.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 29,
                column: "ImageUrl",
                value: "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/desk-lamp.jpg");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 30,
                column: "ImageUrl",
                value: "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/office-accessories.jpg");

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: 1,
                column: "OrderDate",
                value: new DateTime(2024, 8, 12, 16, 48, 54, 197, DateTimeKind.Utc).AddTicks(3460));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: 2,
                column: "OrderDate",
                value: new DateTime(2024, 8, 17, 16, 48, 54, 197, DateTimeKind.Utc).AddTicks(3470));
        }
    }
}
