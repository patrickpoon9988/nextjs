export default async function News() {

    // put codes where above return method 
    // const data = await getData()
    const getData = await fetch(`http://aecom-rdds-dev.southeastasia.cloudapp.azure.com/api/admin/globalsetting?name=codeTables_pageAccess`, { method: 'post' })
    .then(res => res.json()).then(res => {
      console.log(res);
    });

    return (
        <h4>Hello World!</h4>
    )
}