#include <iostream>
using namespace std;

int MAXLIST=100;

void input( int a[MAXLIST], int n)
{
    for (int i = 0; i < n; i++)
    {
        cout <<"Nhap a"[<<i<<]"= "<<;
        cin >> a[i];
    }
}

void output( int a[MAXLIST], int n)
{
    for (int i = 0; i < n; i++)
        cout<<a[i]<<endl;
}

int main()
{
    int a[MAXLIST];
    int n=10;
    input(a[5], n);
    output(a[5], n);
    system("pause");
    return 0;
}