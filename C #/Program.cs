using System;


namespace Calculator
{
     class Program
    {
        static void Main(string[] args)
        {
            double num1, num2;
            int choice;
            Console.WriteLine("Simple Calculator");

            Console.Write("Enter the first number :");
            num1 = Convert.ToDouble(Console.ReadLine());

            Console.Write("Enter the second number :");
            num2 = Convert.ToDouble(Console.ReadLine());

            Console.WriteLine("/n Select your operation");
            Console.WriteLine("1. Addition");
            Console.WriteLine("2. Subtract");
            Console.WriteLine("3. Multiply");
            Console.WriteLine("4. Divide");
            Console.Write("Enter yor choice :");
            choice = Convert.ToInt32(Console.ReadLine());

            switch (choice)
            {
                case 1:
                    Console.WriteLine($"Result:{num1} + {num2} = {num1 + num2}");
                    break;
                case 2:
                    Console.WriteLine($"Result:{num1}- {num2} = {num1 - num2}");
                    break;
                case 3:
                    Console.WriteLine($"Result:{num1} * {num2} = {num1 * num2}");
                    break;
                case 4:
                    if (num2 != 0)
                        Console.WriteLine($"Result:{num1} / {num2} = {num1 / num2}");
                    else
                    {
                        Console.WriteLine("Error: Division by zero is not allowed.");
                    }
                    break;
                default:
                    Console.WriteLine("Error: Invalid choice. Please choose a number between 1 and 4.");
                    break;

            }
            Console.WriteLine("Press any key to exit.");
            Console.ReadKey();
        }
    }
}
