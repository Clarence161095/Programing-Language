Program So_Chinh_phuong
uses crt;
Var a,b,c,min: integer;
BEGIN
  clrscr;
  write('Nhap a: ');
  readln(a);
  write('Nhap b: ');
  readln(b);
  write('Nhap c: ');
  readln(c);

  if sqr(trunc(sqrt(a)))=a then
  writeln('So a la so chinh phuong';

  if sqr(trunc(sqrt(b)))=b then
  writeln('So b la so chinh phuong';
  
  if sqr(trunc(sqrt(c)))=c then
  writeln('So c la so chinh phuong';

  min = a;

  while min < b or min < c do
  begin
    if b < c then
     min = b;
    else
     min = c;
  end;

  readln;
END.