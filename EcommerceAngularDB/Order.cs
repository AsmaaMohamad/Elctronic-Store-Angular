using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EcommerceAngularDB
{
   public class Order
    {
        public int OrderID { get; set; }
        public int CustomerID { get; set; }
        public int ProductID { get; set; }
        public int Quantity { get; set; }
        public Nullable<int> TotalPrice { get; set; }

        public virtual Customer Customer { get; set; }
        public virtual Product Product { get; set; }

    }
}
