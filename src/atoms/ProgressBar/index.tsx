function ProgressBar({
  parentBg = "bg-darkBlue-200",
  childBg = "bg-primary",
  total,
  completed,
  showPercent = true,
}: {
  parentBg?: string;
  childBg?: string;
  total: number;
  completed: number;
  showPercent?: boolean;
}) {
  return (
    <div className="flex space-x-3 items-center">
      <div className={`w-full ${parentBg} rounded-full h-[8px]`}>
        <div
          className={`${childBg} h-[8px] rounded-full`}
          style={{width: `${(completed / total) * 100}%`}}
        ></div>
      </div>
      {showPercent && (
        <p className="text-darkBlue-300 text-sm">
          {Math.round((completed / total) * 100)}%
        </p>
      )}
    </div>
  );
}

export default ProgressBar;
