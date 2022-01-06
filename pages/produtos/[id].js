// export async function getServerSideProps(context) {
//    const id = context.query.id;

//    return {
//       props: {
//          id: id
//       }
//    }
// }

export async function getStaticPaths() {
   return {
      paths: [{
         params: {
            id: '1'
         }
      }, {
         params: {
            id: '2'
         }
      }],
      fallback: 'blocking' //a partir do momento que os dadaos sao carregados eles ficam em cache, nao importa quao demorado seja a primeira vez
   }
}

export async function getStaticProps(context) {
   await delay(3000);
   const id = context.params.id;

   return {
      props: {
         id: id
      }
   }
}

function Produtos(props) {
   return <div>Id do produto: {props.id}</div>
}

export default Produtos;

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}