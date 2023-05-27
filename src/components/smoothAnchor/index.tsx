export interface SmoothScrollAnchorProps {
  targetId: string;
  children: React.ReactNode;
}

const SmoothScrollAnchor: React.FC<SmoothScrollAnchorProps> = ({
  targetId,
  children,
}) => {
  const handleClick = () => {
    const target = document.getElementById(targetId);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <a href={`#${targetId}`} onClick={handleClick}>
      {children}
    </a>
  );
};

export default SmoothScrollAnchor;
