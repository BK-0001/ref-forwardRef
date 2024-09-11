import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { Textarea } from "./Textarea";

type Props = {
  titleFromDB?: string;
  descFromDB?: string;
};

export function Form({ titleFromDB = "", descFromDB = "" }: Props) {
  const [title, setTitle] = useState<string>(titleFromDB);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  console.log("render");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // save data to the db
    console.log("title:", title, "desc:", descriptionRef.current?.value);

    // validate
    // if valid
    // reset the state at the end

    // cleaning
    setTitle("");
    if (descriptionRef.current) {
      descriptionRef.current.value = "";
    }
    // else
    // render something to show some error or anything
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* controlled */}
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>

      {/* uncontrolled */}
      <div>
        <label htmlFor="desc">Description</label>
        <Textarea
          id="desc"
          ref={descriptionRef}
          name="desc"
          defaultValue={descFromDB}
        />
      </div>

      <button>Submit</button>
    </form>
  );
}
