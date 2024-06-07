const CompA = () => {
  console.log('CompA');
  const b = 2;

  return <div>CompA</div>;
};

export default CompA;

for (let i = 0; i < 10; i++) {
  if (i > 3 && i < 6) {
    continue;
  }
  console.log(i);
}
