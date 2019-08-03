namespace EcommerceAngularDB.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class _as : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Products", "Category_ID", "dbo.Categories");
            DropIndex("dbo.Products", new[] { "Category_ID" });
            DropColumn("dbo.Products", "CatID");
            RenameColumn(table: "dbo.Products", name: "Category_ID", newName: "CatID");
            AlterColumn("dbo.Products", "CatID", c => c.Int(nullable: false));
            CreateIndex("dbo.Products", "CatID");
            AddForeignKey("dbo.Products", "CatID", "dbo.Categories", "ID", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Products", "CatID", "dbo.Categories");
            DropIndex("dbo.Products", new[] { "CatID" });
            AlterColumn("dbo.Products", "CatID", c => c.Int());
            RenameColumn(table: "dbo.Products", name: "CatID", newName: "Category_ID");
            AddColumn("dbo.Products", "CatID", c => c.Int(nullable: false));
            CreateIndex("dbo.Products", "Category_ID");
            AddForeignKey("dbo.Products", "Category_ID", "dbo.Categories", "ID");
        }
    }
}
