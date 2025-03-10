import Main from "@/components/template/main";

export default function Layout(props: any) {
  return (
    <Main>
      <div>{props.children}</div>
    </Main>
  );
}
