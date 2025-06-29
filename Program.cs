﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Classes
{
    class Program
    {
        static void Main(string[] args)
        {
            //var customer = new Customer(1);
            //customer.Orders.Add(new Order());
            //customer.Orders.Add(new Order());
            //Console.WriteLine(customer.Orders.Count);
            //try
            //{
            //    var num = int.Parse("abc");
            //}
            //catch (Exception) 
            //{
            //    Console.WriteLine("Conversion failed");
            //}
            //var number;
            //var result = int.TryParse("abc", out number);
            //if (result)
            //    Console.WriteLine(number);
            //else
            //    Console.WriteLine("Conversion failed");
        }
        static void UseParams()
        {
            var calculator = new Calculator();
            Console.WriteLine(calculator.Add(1, 2));
            Console.WriteLine(calculator.Add(1, 2, 3));
            Console.WriteLine(calculator.Add(1, 2, 3, 4));
            Console.WriteLine(calculator.Add(1, 2, 3, 4, 5));
        }
        static void UsePoints()
        {
            try
            {
                var point = new Point(10, 20);
                point.Move(new Point(40, 60));
                Console.WriteLine("Point is at: {0}, {1}", point.X, point.Y);

                point.Move(100, 200);
                Console.WriteLine("Point is at: {0}, {1}", point.X, point.Y);
            }
            catch (Exception)
            {
                Console.WriteLine("An expected error occured");
            }
        }
    }
}
