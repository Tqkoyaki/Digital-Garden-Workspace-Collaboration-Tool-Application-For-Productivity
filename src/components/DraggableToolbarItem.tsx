import { useDrag } from "react-dnd";

type Props = {
  name: string;
  canvasItems: any;
  setCanvasItems: (canvasItems: any) => void;
};

const DraggableToolbarItem = ({ name, canvasItems, setCanvasItems }: Props) => {
    const [{ isDragging }, drag] = useDrag({
        type: "toolbarItem",
        item: { name },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
    });

  return (
    <div ref={drag} className="h-24 w-48 flex justify-center items-center text-xl text-cream">
      <span className="cursor-pointer transform duration-150 hover:scale-125" onClick={() => setCanvasItems((canvasItems: any) => [...canvasItems, {name: name}])}>
        {name}
      </span>
    </div>
  );
};

export default DraggableToolbarItem;
