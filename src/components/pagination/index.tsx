import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { IconButton, Typography } from "@material-tailwind/react";
interface PropsPagination{
  active: number,
  setActive: (state: number) => void
}
export default function Pagination({active, setActive}: PropsPagination) {
  const next = () => {
    if (active === 2) return;
 
    setActive(active + 1);
  };
 
  const prev = () => {
    if (active === 1) return;
 
    setActive(active - 1);
  };
 
  return (
    <div className="flex items-center gap-8 justify-center pb-4">
      <IconButton
        size="sm"
        variant="outlined"
        color="white"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
      <Typography color="gray" className="font-normal text-white">
        Page <strong className="text-white">{active}</strong> of{" "}
        <strong className="text-white">2</strong>
      </Typography>
      <IconButton
        size="sm"
        variant="outlined"
        color="white"
        onClick={next}
        disabled={active === 2}
      >
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4 text-white" />
      </IconButton>
    </div>
  );
}