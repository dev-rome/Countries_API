import classNames from "classnames";

function Panel({ children, className, ...rest }) {
  const panelClassNames = classNames(
    "w-52 rounded dark:bg-[#2B3844] bg-[#FFFFFF] dark:text-[#FFFFFF] text-[#111517]",
    className
  );

  return (
    <div {...rest} className={panelClassNames}>
      {children}
    </div>
  );
}

export default Panel;
