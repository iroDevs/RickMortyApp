export async function getInfoByApi(valor){
  const resposta = await fetch(`https://rickandmortyapi.com/api/${valor}`);

  const resultado = await resposta.json();
  return  await resultado
}