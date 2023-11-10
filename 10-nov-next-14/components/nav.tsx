import Link from "next/link";

type IProps = {
  pageName: string;
  message?: string;
};

export default function Nav(props: IProps) {
  console.log("props ", props); // Shehzad

  let isLoggedin = false;

  const a = isLoggedin ? "show profile data" : "please login";
  // console.log("aa ", a);

  return (
    <div className="space-x-6">
      <h1 className="text-5xl">5 + 5</h1>
      <h1 className="text-5xl">{5 + 5}</h1>
      <h1 className="text-5xl">{props.pageName}</h1>
      {"thsi is stirng"}
      {54}
      <div className="flex gap-6">
        <Link className="border border-gray-600 p-5 m-5" href="/">
          Home
        </Link>{" "}
        <br />
        <Link className="border border-gray-600 p-5 m-5" href="/about">
          About
        </Link>{" "}
        <br />
        <Link className="border border-gray-600 p-5 m-5" href="/contact">
          Contact
        </Link>{" "}
        <br />
        {isLoggedin ? <Link href="/dashboard">Dashboard</Link> : null}
      </div>
    </div>
  );
}
