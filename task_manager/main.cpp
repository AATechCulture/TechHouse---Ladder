#include <iostream>
#include <string>
using namespace std;

////////////////////////////////////////////////////////
// Program: Menu System                                /
// Author: Olutade Jegede                              /
// Class: Data Structures & Algorithms                 /
////////////////////////////////////////////////////////

////////////////////////////////////////////////////////
// Function Prototypes:                                /  
////////////////////////////////////////////////////////

void displayMenu();
void displayTasks (string tasks[], int length);
void displayTaskReverse (string tasks[], int length);
void displayTaskCount (int length);
int addTask (string task, string tasks[], int length, int position);
int deleteTask (string tasks[], int length, int position);
bool isValid (string task);
bool checkPosition (int position, int length);
string capitalize(string task);

////////////////////////////////////////////////////////
// Main Function:                                      /  
////////////////////////////////////////////////////////

int main()
{
  const int MAX_SIZE = 20;
  string tasks[MAX_SIZE];
  int length = 0, position, select;

  do
  {
    displayMenu ();
    cin >> select;

    if (cin.fail())
    {
      cin.clear();
      cin.ignore(100, '\n');
      cout << "Invalid selection" << endl;
      continue;
    }
    
    string task;

    switch (select)
    {
      case 1: 
        cout << endl;
        cout << "Enter task name and it's position: ";
        cin >> task >> position;
        if (!isValid(task))
        {
          cout << "Invalid task name" << endl;
          cin.clear();
          cin.ignore(100, '\n');
          break;
        }
        if (!checkPosition(position - 1, length + 1))
        {
            cout << "Invalid position" << endl;
            cin.clear();
            cin.ignore(100, '\n');
            break;
        }
        task = capitalize(task);
        length = addTask (task, tasks, length, position - 1);
        break;
      case 2:
        cout << endl;
        cout << "Enter the position you want to delete: ";
        cin >> position;
        if (cin.fail() || !checkPosition (position-1,length))
        {
          cin.clear();
          cin.ignore(100, '\n');
          cout << "Invalid selection" << endl;
          break;
        }
        length = deleteTask (tasks, length, position - 1);
        break;
      case 3:
        displayTaskCount (length);
        break;
      case 4:
        displayTasks (tasks, length);
        break;
      case 5:
        displayTaskReverse (tasks, length);
        break;
      case 6:
        cout << endl;
        cout << "Ending program!" << endl;
        break;
      default: 
        cout << endl;
        cout << "Invalid response!" << endl;
        break;
    }
  }
  while (select != 6);
  return 0;
}

////////////////////////////////////////////////////////
// Function to display task menu:                      /  
////////////////////////////////////////////////////////

void displayMenu ()
{
  cout << endl;
  cout << "                   Current Task List                        "    << endl;
  cout << "----------------------------------------------------------" <<   endl;
  cout << "1. Add a task X at a particular position p in the task list"     << endl;
  cout << "2. Delete the task Y at position q from the task list" << endl;
  cout << "3. Print the number of tasks in the task list" << endl;
  cout << "4. Print all tasks in the task list in the order of position"    << endl;
  cout << "5. Print all tasks in the task list in reverse order of position" <<        endl;
  cout << "6. Quit" << endl;
  cout << "Choice -> ";
}

////////////////////////////////////////////////////////
// Function to display tasks:                          /  
////////////////////////////////////////////////////////

void displayTasks (string tasks[], int length)
{
  if (length == 0)
  {
    cout << endl;
    cout << "Task list is empty, add a task!" << endl;
  }
  cout << endl;
  for (int i = 0; i < length; i++)
  {
    cout << "Task #" << (i+1) << ". " << tasks[i] << endl;
  }
}

////////////////////////////////////////////////////////
// Function to display tasks in reverse:               /  
////////////////////////////////////////////////////////

void displayTaskReverse (string tasks[], int length)
{
   if (length == 0)
    {
      cout << endl;
      cout << "Task list is empty, add a task!" << endl;
    }
   cout << endl;
  for (int i = length - 1; i >= 0; i--)
  {
    cout << "Task #" << (i+1) << ". " << tasks[i] << endl;
  }
}

////////////////////////////////////////////////////////
// Function to display task count:                     /  
////////////////////////////////////////////////////////

void displayTaskCount (int length)
{
  cout << endl;
  cout << "There are " << length << " number of tasks!" << endl;
}

////////////////////////////////////////////////////////
// Function to add a task:                             /  
////////////////////////////////////////////////////////

int addTask (string task, string tasks[], int length, int position)
{
  const int MAX_SIZE = 20;
  if (length >= MAX_SIZE)
  {
    cout << endl;
    cout << "Task list is full, you cannot add!" << endl;
    return length;
  }
  else if (position < 0 || position > length)
  {
    cout << endl;
    cout << "Invalid position" << endl;
    return length;
  }
  else
  {
    cout << endl;
    cout << "Successfully added task: " << task << " at position: " << (position + 1) << endl;
  for (int i = length; i > position; i--)
  {
    tasks[i] = tasks[i - 1];
  }
    tasks[position] = task;
    return length + 1;
  }
}

////////////////////////////////////////////////////////
// Function to delete a task:                          /  
////////////////////////////////////////////////////////

int deleteTask (string tasks[], int length, int position)
{
  if (length == 0)
  {
    cout << endl;
    cout << "Task list is empty, nothing to delete!" << endl;
    return length;
  }
  else if (position < 0 || position >= length)
  {
    cout << endl;
    cout << "Invalid position" << endl;
    return length;
  }
  else
  {
    cout << endl;
    cout << "Successfully deleted task: " << tasks[position] << endl;
    for (int i = position; i < length - 1; i++)
    {
      tasks[i] = tasks[i + 1];
    }
    return length - 1;
  }
}

////////////////////////////////////////////////////////
// Functions to error check task and position:         /  
////////////////////////////////////////////////////////

bool isValid (string task)
{
  if (task.empty())
  {
    return false;
  }

  if (!isalpha(task[0]))
  {
    return false;
  }

  bool hasDigit = false;
  for (int i = 0; i < task.length(); i++)
  {
    if (isdigit(task[i]))
    {
      hasDigit = true;
    }
    else if (!isalpha(task[i]))
    {
      return false;
    }
  }
  return hasDigit;
}

bool checkPosition (int position, int length)
{
  return (position >= 0 && position < length);
}

////////////////////////////////////////////////////////
// Functions to capitalize task name:                  /  
////////////////////////////////////////////////////////

string capitalize(string task)
{
  string capitalizedTask;
  for (char c : task)
  {
    capitalizedTask += toupper(c);
  }
  return capitalizedTask;
}