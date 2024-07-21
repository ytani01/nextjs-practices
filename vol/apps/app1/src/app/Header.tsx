export default function Header({msg, children}) {
  msg = msg ? msg : Header.name;
  console.log(`${Header.name}> msg="${msg}"`);
  console.log(`${Header.name}> children="${children}"`);
  
  return (
    <header>
      <h3 className="text-center">
        {msg} <br />
        {children}
      </h3>
      <hr />
    </header>
  );
}
