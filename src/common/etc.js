
/**     --------------------------- */

// interface AppProps {
//     name: string;
//   }
  
//   const App = (props: AppProps) => {};

/**     --------------------------- */


// interface ContentProps {
//     style?: CSSProperties;
//   }
  
//   const Content = ({ children, style = {} }: PropsWithChildren<ContentProps>) => {
//     return (
//       <div style={style}>
//         {children}
//       </div>
//     );
//   };




// const onChange: React.ChangeEventHandler<HTMLInputElement> = (
//     e
//   ) => {
//     const { name, value } = e.target;
//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };


// const onChange = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const { name, value } = e.target;
//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };


// type GreetingsProps = {
//     name: string;
//     mark: string;
//     optional?: string;
//     onClick: (name: string) => void; // 아무것도 리턴하지 않는다는 함수를 의미합니다.
//   };
  
//   function Greetings({ name, mark, optional, onClick }: GreetingsProps) {
//     const handleClick = () => onClick(name);
//     return (
//       <div>
//         Hello, {name} {mark}
//         {optional && <p>{optional}</p>}
//         <div>
//           <button onClick={handleClick}>Click Me</button>
//         </div>
//       </div>
//     );
//   }
  

// Greetings.defaultProps = {
//     mark: '!'
//   };



// import React from 'react';

// type GreetingsProps = {
//   name: string;
//   mark: string;
// };

// const Greetings = ({ name, mark }: GreetingsProps) => (
//   <div>
//     Hello, {name} {mark}
//   </div>
// );

// Greetings.defaultProps = {
//   mark: '!'
// };



// const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setForm({
//       ...form,
//       [name]: value
//     });
//   };


// type MyFormProps = {
//     onSubmit: (form: { name: string; description: string }) => void;
//   };
  
//   function MyForm({ onSubmit }: MyFormProps) {
//     const [form, setForm] = useState({
//       name: '',
//       description: ''
//     });
  
// let callaq  = <T extends {}> (a : T) : T =>{

//     return a

// }

// let callaq  = <T,> (a : T) : T =>{

//     return a

// }



// interface EventTarget {
//     addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
//     dispatchEvent(evt: Event): boolean;
//     removeEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
// }

// interface SyntheticEvent {
//     bubbles: boolean;
//     cancelable: boolean;
//     currentTarget: EventTarget;
//     defaultPrevented: boolean;
//     eventPhase: number;
//     isTrusted: boolean;
//     nativeEvent: Event;
//     preventDefault(): void;
//     stopPropagation(): void;
//     target: EventTarget;
//     timeStamp: Date;
//     type: string;
// }


// export type InputChangeEventHandler = React.ChangeEventHandler<HTMLInputElement>
// export type TextareaChangeEventHandler = React.ChangeEventHandler<HTMLTextAreaElement>
// export type SelectChangeEventHandler = React.ChangeEventHandler<HTMLSelectElement>

// const [anchorElement, setAnchorElement] = useState<HTMLButtonElement | null>(null);

// const handleMenu = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) : void => {
//     setAnchorElement(event.currentTarget);
// };

// interface IProps_Square {
//     message: string;
//     onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
//   }