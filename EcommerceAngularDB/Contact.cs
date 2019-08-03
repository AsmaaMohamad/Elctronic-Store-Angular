using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EcommerceAngularDB
{
   public  class Contact
    {
        public int ID { get; set; }
       public int CustomerID { get; set; }
        public string Subject { get; set; }
        public string Message { get; set; }

        public virtual Customer Customer { get; set; }
    }
}
