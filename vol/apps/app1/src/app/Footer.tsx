export default function Footer({msg, children}) {
  msg = msg ? msg : Footer.name;
  console.log(`${Footer.name}> msg="${msg}"`);
  console.log(`${Footer.name}> children="${children}"`);

  return (
    <dev>
      <hr />
      <h3 className="text-center">
        {children}<br />        
        {msg}
      </h3>
    </dev>
  );
}
