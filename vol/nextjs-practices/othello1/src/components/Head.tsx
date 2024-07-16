import { metadata } from "../app/layout";
// import { version } from 'next/package.json';
const { version } = require('next/package.json');

const Head = () => {
    const now = new Date();

    return (
        <div className="grid grid-cols-3
                        px-4 py-2
                        border-b border-blue-500">
          <div className="">
            Next.js {version}
          </div>
          <div className="text-center">
            {metadata.title + ""}
          </div>
          <div className="text-right">
            build: {
                now.toLocaleString('ja-JP', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                weekday: 'short',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                fractionalSecondDigits: 3
            })}
          </div>
        </div>
    );
};

export default Head;
