import React, { useState } from 'react';
import Editor from './Editor';

interface EditorData {
  blocks: any[];
  version: string;
  time: number;
}

const About: React.FC = () => {
  const [editorData, setEditorData] = useState<EditorData | null>(null);

  const handleEditorSave = (data: EditorData) => {
    setEditorData(data);
    console.log('Editor data saved:', data);
  };

  const aboutParagraph = {
    blocks: [
      {
        type: 'paragraph',
        data: {
          text: "Hello, I'm Dustin Kerrigan, a Computer Science graduate from the University of North Florida (August 2025). Below you'll find my track record as a developer through school, internship, and personal projects.",
        },
      },
    ],
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="w-full">
            <div className ="card-style">
            <Editor
              initialData={aboutParagraph}
              onSave={handleEditorSave}
              readOnly={true}
            />
            </div>
          </div>

          <div className="relative">
            <div className="w-56 h-56 mx-auto">
              <img
                src='/IMG_5930.jpg'
                alt="Profile"
                className="w-full h-full rounded-full object-cover transform hover:scale-105 transition-transform duration-300 shadow-xl"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-blue-500/10 rounded-full -z-10"></div>
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-500/10 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;