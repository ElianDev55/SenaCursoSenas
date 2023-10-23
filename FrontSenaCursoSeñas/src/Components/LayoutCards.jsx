

export function LayoutCards({children}) {


  return (
    <div className="gap-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  pt-20 justify-center ">
        {children}
    </div>
  );
}
