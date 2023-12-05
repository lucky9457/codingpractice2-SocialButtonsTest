const Button = (props) => {
  //  Write your code here.
  const { name, clas } = props;
  return <button className={clas}>{name}</button>;
};

const element = (
  //  Write your code here.
  <div className="main">
    <h1 className="head">Social Buttons</h1>
    <div class="buttons">
      <Button name="Like" clas="b1" />
      <Button name="Comment" clas="b2" />
      <Button name="Share" clas="b3" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
