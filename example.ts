import { Polybase } from "@polybase/client";

async function main() {


  const db = new Polybase({
    defaultNamespace: "pk/0x0fd2b46704720f718210803cd1ed206a30a852e252322eed4ec600048d4978b332aa5ce27af8394d196a3c4e23a42640b8b936ddecc240694f26162543afb383/test",
  });

  const recordData = await db.collection("City").create(["seattle", "Seattle"]);


  console.log("recordData: ",recordData)
  
  const collectionReference = db.collection("City");

  const upateData = await collectionReference
  .record("seattle")
  .call("setCountry", ["USA"]);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
