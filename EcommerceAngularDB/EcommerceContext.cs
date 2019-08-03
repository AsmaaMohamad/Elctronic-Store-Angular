using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.Entity;
using System.Threading.Tasks;

namespace EcommerceAngularDB
{
   public class EcommerceContext: DbContext
    {
        public EcommerceContext() :
             base(@"Data Source=DESKTOP-BTH87SL\SQL2017EXPRESS;Initial Catalog=EcommerceElectronics;Integrated Security=True")
        {

        }
        public DbSet<Admin>Admin{ get; set; }
        public DbSet<Category>Category{ get; set; }
        public DbSet<Product> Product{ get; set; }
        public DbSet<Contact>Contact{ get; set; }
        public DbSet<Customer> Customer{ get; set; }
        public DbSet<Order>Order{ get; set; }
    }
}
