using System;
using System.Collections.Generic;


namespace TodoList
{
    class Program
    {
        static List<string> todoList = new List<string>();
        static void Main(string[] args)
        {
            int choice;
            Console.WriteLine("Simple TO-DO List");
            do
            {
                Console.WriteLine("\n Menu :");
                Console.WriteLine("1. Add Task ");
                Console.WriteLine("2. View Task");
                Console.WriteLine("3. Remove the task");
                Console.WriteLine("4. Exit");
                Console.Write("Enter your choice :");
                choice = Convert.ToInt32(Console.ReadLine());

                switch (choice)
                {
                    case 1:
                        AddTask();
                        break;
                    case 2:
                        ViewTask();
                        break;
                    case 3:
                        RemoveTask();
                        break;
                    case 4:
                        Console.WriteLine("Exit");
                        break;
                    default:
                        Console.WriteLine("Invalid choice please select 1-4.");
                        break;
                }
            } while (choice != 4);
           
        }
        static void AddTask()
        {
            Console.Write("Enter the task: ");
            string task = Console.ReadLine();
            todoList.Add(task);
            Console.WriteLine("Added successfully");
        }
        static void ViewTask()
        {
            if (todoList.Count == 0)
            {
                Console.WriteLine("\n No Task");
            }
            else
            {
                Console.WriteLine("To-Do List:");
                for (int i = 0; i < todoList.Count; i++)
                {
                    Console.WriteLine($"{i + 1}.{todoList[i]}");
                }
            }
        }
        static void RemoveTask()
        {
            Console.Write("Enter the task number to  completed: ");
            int taskNumber = Convert.ToInt32(Console.ReadLine());
            todoList.RemoveAt(taskNumber - 1);
        }

    }
}
