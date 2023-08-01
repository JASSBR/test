using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace test.Migrations
{
    /// <inheritdoc />
    public partial class relationship : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Circles",
                table: "Sheets");

            migrationBuilder.DropColumn(
                name: "Polylines",
                table: "Sheets");

            migrationBuilder.AddColumn<int>(
                name: "SheetId",
                table: "Lines",
                type: "int",
                nullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ProjectId",
                table: "Jobs",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddColumn<int>(
                name: "SheetId",
                table: "Circles",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Sheets_JobId",
                table: "Sheets",
                column: "JobId");

            migrationBuilder.CreateIndex(
                name: "IX_Projects_ClientId",
                table: "Projects",
                column: "ClientId");

            migrationBuilder.CreateIndex(
                name: "IX_Projects_UserId",
                table: "Projects",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Lines_SheetId",
                table: "Lines",
                column: "SheetId");

            migrationBuilder.CreateIndex(
                name: "IX_Jobs_ProjectId",
                table: "Jobs",
                column: "ProjectId");

            migrationBuilder.CreateIndex(
                name: "IX_Circles_SheetId",
                table: "Circles",
                column: "SheetId");

            migrationBuilder.AddForeignKey(
                name: "FK_Circles_Sheets_SheetId",
                table: "Circles",
                column: "SheetId",
                principalTable: "Sheets",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Jobs_Projects_ProjectId",
                table: "Jobs",
                column: "ProjectId",
                principalTable: "Projects",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Lines_Sheets_SheetId",
                table: "Lines",
                column: "SheetId",
                principalTable: "Sheets",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Projects_Clients_ClientId",
                table: "Projects",
                column: "ClientId",
                principalTable: "Clients",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Projects_Users_UserId",
                table: "Projects",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Sheets_Jobs_JobId",
                table: "Sheets",
                column: "JobId",
                principalTable: "Jobs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Circles_Sheets_SheetId",
                table: "Circles");

            migrationBuilder.DropForeignKey(
                name: "FK_Jobs_Projects_ProjectId",
                table: "Jobs");

            migrationBuilder.DropForeignKey(
                name: "FK_Lines_Sheets_SheetId",
                table: "Lines");

            migrationBuilder.DropForeignKey(
                name: "FK_Projects_Clients_ClientId",
                table: "Projects");

            migrationBuilder.DropForeignKey(
                name: "FK_Projects_Users_UserId",
                table: "Projects");

            migrationBuilder.DropForeignKey(
                name: "FK_Sheets_Jobs_JobId",
                table: "Sheets");

            migrationBuilder.DropIndex(
                name: "IX_Sheets_JobId",
                table: "Sheets");

            migrationBuilder.DropIndex(
                name: "IX_Projects_ClientId",
                table: "Projects");

            migrationBuilder.DropIndex(
                name: "IX_Projects_UserId",
                table: "Projects");

            migrationBuilder.DropIndex(
                name: "IX_Lines_SheetId",
                table: "Lines");

            migrationBuilder.DropIndex(
                name: "IX_Jobs_ProjectId",
                table: "Jobs");

            migrationBuilder.DropIndex(
                name: "IX_Circles_SheetId",
                table: "Circles");

            migrationBuilder.DropColumn(
                name: "SheetId",
                table: "Lines");

            migrationBuilder.DropColumn(
                name: "SheetId",
                table: "Circles");

            migrationBuilder.AddColumn<int>(
                name: "Circles",
                table: "Sheets",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Polylines",
                table: "Sheets",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<string>(
                name: "ProjectId",
                table: "Jobs",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");
        }
    }
}
