using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EcommerceAngularDB
{
 public class Customer
    {
        public int ID { get; set; }
        public string FName { get; set; }
        public string LName { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public Nullable<int> CreditCard { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
        public virtual ICollection<Contact> Contacts { get; set; }
    }
}
