import QRCode from 'qrcode'
import { useState } from 'react';

const App = () => {
  const [url, setUrl] = useState('')
  const [qrcode, setQrcode] = useState('')

  const GenerateQRCode = () => {
    QRCode.toDataURL(url, {
      width: 800,
      margin:2,
      color: {
        dark: '#000',
        light: '#fff'
      }
    }, (err, url) => {
      if (err) return console.error(err)
      setQrcode(url)
    })
  }
  return (
    <div className="app">
      <h1>QR Code Generator</h1>
      <input 
        type="text"
        placeholder="htttps://google.com" 
        value={url}
        onChange={(evt) => setUrl(evt.target.value)}
        />
        <button onClick={GenerateQRCode}>Generator</button>
        {qrcode && <>
          <img src={qrcode} />
          <a href={qrcode} download="qrcode.png">Download</a>
          </>}
    </div>
  );
};
export default App;
