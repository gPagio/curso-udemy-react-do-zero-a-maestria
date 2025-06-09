import { forwardRef, useRef, useImperativeHandle } from "react";

const SomeComponent = forwardRef((props, ref) => {
  const localComponentRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      validate: () => {
        const inputValue = localComponentRef.current.value;
        if (inputValue.length > 3) {
          localComponentRef.current.value = "";
        }
      }
    }
  });

  return (
    <div>
      <p>Insira no máximo 3 caracteres</p>
      <input type="text" ref={localComponentRef} />
    </div>
  );
});

export default SomeComponent;
