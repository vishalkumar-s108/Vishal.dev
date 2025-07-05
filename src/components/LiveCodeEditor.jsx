import React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const code = `
function Hello() {
  return <h2>Hello Vishal.dev 🚀</h2>;
}
render(<Hello />);
`;

export default function LiveCodeEditor() {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg mt-10 max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-purple-400">⚡ Live Code Editor</h2>

      <LiveProvider code={code} noInline={true}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm mb-1 text-gray-400">Editor</p>
            <LiveEditor className="border rounded p-2 bg-black text-sm" />
            <LiveError className="text-red-400 mt-2" />
          </div>

          <div>
            <p className="text-sm mb-1 text-gray-400">Preview</p>
            <LivePreview className="p-4 bg-white text-black rounded min-h-[100px]" />
          </div>
        </div>
      </LiveProvider>
    </div>
  );
}
