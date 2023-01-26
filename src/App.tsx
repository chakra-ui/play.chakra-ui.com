import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import SandpackEditor from "./components/sandpack-editor";
import { defaultCode } from "./constants/sandpack";
import { decode } from "./utils/encoder";

const App = () => {
  const [code, setCode] = useState('');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const encoded = searchParams.get('code');
    let decoded;

    if (encoded) {
      decoded = decode(encoded);
    }

    setCode(decoded ?? defaultCode);
  }, []);

  return (
    <SandpackEditor code={code} />
  )
}

export default App
