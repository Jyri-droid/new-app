const Settings = () => {
    const fontWeights = [];
    for (let i = 100; i <= 900; i+= 100) {
      fontWeights.push(String(i));
    }
    return <>
      <h1>Settings</h1>
        {
        fontWeights.map((element) => 
          <h2 style={{fontWeight: element}}>SF Pro Display | weight {element}</h2>
        )
      }
    </>;
}

export default Settings;