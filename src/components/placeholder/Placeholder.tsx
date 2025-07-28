import styles from "./Placeholder.module.scss";

type PlaceholderProps = {
  width?: string | number;
  height?: string | number;
};

export const Placeholder = ({
  width = "100%",
  height = "200px",
}: PlaceholderProps) => {
  const parsedWidth = typeof width === "number" ? `${width}px` : width;
  const parsedHeight = typeof height === "number" ? `${height}px` : height;

  return (
    <div
      className={styles.placeholder}
      style={{
        width: parsedWidth,
        height: parsedHeight,
      }}
    ></div>
  );
};
