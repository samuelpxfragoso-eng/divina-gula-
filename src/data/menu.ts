
export interface MenuItem {
    name: string;
    price: string;
}

export interface MenuCategory {
    title: string;
    items: MenuItem[];
}

export const menuData: MenuCategory[] = [
    {
        title: "Entradinhas",
        items: [
            { name: "Caldinho de Feijão", price: "15,30" },
            { name: "Caldinho Bobó de Camarão", price: "16,50" },
            { name: "Empanada de Costela [ 3 unid. ]", price: "46" },
            { name: "Bolinho de Camarão", price: "41" },
            { name: "Croquete de Cupim", price: "39" },
            { name: "Tijolinho de Tapioca", price: "36,50" },
            { name: "Pão de Alho", price: "19,80" },
            { name: "Pastel de Camarão", price: "39,80" },
            { name: "Pastel de Queijo", price: "35" },
            { name: "Bun de Robalo", price: "39,80" },
            { name: "Mini Hambúrguer de Costela", price: "28,80" },
            { name: "Coxinha de Galinha Caipira", price: "42" },
        ]
    },
    {
        title: "Petiscos",
        items: [
            { name: "Atolado de Camarão", price: "68" },
            { name: "Atolado de Carne de Sol", price: "64" },
            { name: "Carne de Sol Tradição", price: "64,80" },
            { name: "Carne Sol Picanha do Mercadão", price: "89,80" },
            { name: "Filé do Mercadão", price: "89,80" },
            { name: "Cupim Petisco", price: "74" },
            { name: "Fish 'N Chips", price: "59,80" },
            { name: "Carpaccio Mineiro", price: "54" },
            { name: "Camarão ao Azeite", price: "95" },
            { name: "Picanha do Sol com Farofa Matuta", price: "89,80" },
            { name: "Camarão Vitrola [ 10 unid. ]", price: "95" },
            { name: "Brochete Divina", price: "86" },
        ]
    },
    {
        title: "Petiscos na Brasa",
        items: [
            { name: "Filé de Frango com Bacon", price: "46" },
            { name: "Coração de Galinha", price: "46" },
            { name: "Camarão na Forca", price: "85" },
            { name: "Queijo Coalho com Ervas", price: "46" },
            { name: "Queijo Coalho com Pipoca de Alho", price: "46" },
            { name: "Queijo Tranchinha", price: "59,80" },
        ]
    },
    {
      title: "Linguiças Caseiras",
      items: [
        { name: "Linguiça de Porco com Macaxeira", price: "48" },
        { name: "Linguiça de Porco com Batata", price: "52" },
      ]
    },
    {
      title: "Panelinhas",
      items: [
        { name: "Panelinha de Miúdos", price: "56" },
        { name: "Panelinha de Carneiro", price: "69" },
        { name: "Siri no Coco", price: "69" },
      ]
    },
    {
      title: "Saladas",
      items: [
        { name: "Salada Verde com Camarão", price: "58" },
        { name: "Salada de Salmão", price: "68" },
      ]
    },
    {
      title: "Peixes do Mar",
      items: [
        { name: "Camarão Catupiry", price: "149,80" },
        { name: "Arroz de Camarão", price: "149,80" },
        { name: "Arroz de Polvo", price: "180" },
        { name: "Arroz de Polvo com Camarão", price: "180" },
        { name: "Filé de Robalo ao Molho de Camarão", price: "210" },
        { name: "Filé de Peixe na Castanha", price: "168" },
        { name: "Filé de Peixe ao Molho Laranja", price: "168" },
        { name: "Peixe Grelhado com Uvas e Legumes", price: "168" },
        { name: "Salmão Grelhado com Uvas e Legumes", price: "168" },
        { name: "Filé de Salmão ao Molho de Jabuticaba", price: "158" },
      ]
    },
    {
      title: "Moquecas",
      items: [
        { name: "Camarão", price: "149,80" },
        { name: "Peixe", price: "108" },
        { name: "Polvo", price: "180" },
        { name: "Peixe com Camarão", price: "180" },
        { name: "Vegetariana", price: "54" },
      ]
    },
    {
      title: "Grelhados na Brasa",
      items: [
        { name: "Picanha", price: "179,80" },
        { name: "Maminha", price: "149,80" },
        { name: "Carne de Sol de Picanha", price: "176" },
        { name: "Picanha Suína", price: "108" },
      ]
    },
    {
      title: "Pratos da Casa",
      items: [
        { name: "Amostrado", price: "148" },
        { name: "Costela Minga ao Bafo", price: "145" },
        { name: "Costela Inteira 45h", price: "216" },
        { name: "Filé Bom de Baba", price: "148" },
        { name: "Tutu à Mineira", price: "138" },
        { name: "Tropeiro Mineiro", price: "138" },
        { name: "Picanha Individual", price: "96" },
        { name: "Cupim à Parmegiana", price: "88" },
      ]
    },
    {
      title: "Infantil",
      items: [
        { name: "Picadinho de Filé", price: "48,80" },
        { name: "Picadinho de Frango", price: "36" },
        { name: "Peixinho Empanado", price: "44" },
      ]
    },
     {
      title: "Sobremesa",
      items: [
        { name: "Crème Brûlée", price: "19" },
        { name: "Pudim de Leite", price: "18" },
        { name: "Brigadeiro", price: "9,80" },
        { name: "Torre de Tapioca", price: "48" },
        { name: "Quero-Quero", price: "42" },
        { name: "Cartola", price: "38" },
        { name: "Torta Ferreiro", price: "34" },
      ]
    },
     {
      title: "Drinks Especiais",
      items: [
        { name: "Moscow Mule", price: "29,50" },
        { name: "Fitzgerald", price: "36" },
        { name: "Negroni", price: "34" },
        { name: "Paloma", price: "42" },
        { name: "Porn Star Martini", price: "38" },
        { name: "Pastoril", price: "29" },
        { name: "Strawberry Gin Brasil Smash", price: "36" },
        { name: "Guerreiro Alagoano", price: "35" },
        { name: "Reisado", price: "35" },
      ]
    },
     {
      title: "Drinks do Nosso Jeito",
      items: [
        { name: "Caipiroska Tradicional", price: "23" },
        { name: "Caipiroska Tradicional 2 Frutas", price: "26" },
        { name: "Caipiroska Absolut", price: "26" },
        { name: "Caipiroska Absolut 2 Frutas", price: "32" },
        { name: "Aperol Spritz", price: "39" },
        { name: "Gin Tônica", price: "34" },
        { name: "Mojito", price: "24" },
      ]
    },
    {
      title: "Destilados",
      items: [
        { name: "Tequila Dose", price: "24" },
        { name: "Campari Dose", price: "12,90" },
        { name: "Vodka Smirnoff", price: "12" },
        { name: "Vodka Absolut", price: "16" },
        { name: "Gin", price: "22" },
        { name: "Whiskie Johnnie Walker Red", price: "18" },
        { name: "Whiskie Johnnie Walker Black", price: "30" },
        { name: "Whiskie Johnnie Walker Double Black", price: "35" },
        { name: "Whiskie Old Par", price: "23" },
        { name: "Cachaça Divininha", price: "10,90" },
      ]
    },
     {
      title: "Licores",
      items: [
        { name: "Amarula", price: "23" },
        { name: "Cointreau", price: "24" },
        { name: "Cuarenta y Tres", price: "33" },
        { name: "Drambuie", price: "27" },
        { name: "Frangélico", price: "27" },
      ]
    },
    {
      title: "Bebidas Não Alcoólicas",
      items: [
        { name: "Água de Coco", price: "8,50" },
        { name: "Jarra de Água de Coco", price: "18" },
        { name: "Água Mineral", price: "7" },
        { name: "Água Mineral com Gás [ 500 ml ]", price: "7,50" },
        { name: "Água Tônica", price: "9" },
        { name: "Suco de Fruta", price: "9" },
        { name: "Jarra de Suco", price: "18" },
        { name: "Suco de Morango", price: "10" },
        { name: "Jarra de Suco de Morango", price: "24" },
        { name: "Suco de Morango com Laranja", price: "13" },
        { name: "Jarra de Suco de Morango com Laranja", price: "28" },
        { name: "Refrigerante", price: "8,50" },
        { name: "Red Bull", price: "22" },
      ]
    },
    {
      title: "Cervejas Long Neck",
      items: [
        { name: "Heineken", price: "13,90" },
        { name: "Heineken 0.0", price: "13,90" },
        { name: "Cerveja Praya [ Sem Glúten ]", price: "12,90" },
        { name: "Amstel Ultra 72kcal [ Sem Glúten ]", price: "12,90" },
      ]
    },
     {
      title: "Cervejas Craft",
      items: [
        { name: "Baden Baden [ 600 ml ]", price: "28" },
        { name: "Blue Moon", price: "22" },
        { name: "Lagunitas IPA", price: "24" },
      ]
    },
    {
      title: "Cervejas [ 600 ml ]",
      items: [
        { name: "Heineken", price: "19,90" },
        { name: "Eisenbahn", price: "17,90" },
        { name: "Amstel Puro Malte", price: "16,90" },
        { name: "Devassa", price: "16" },
      ]
    },
    {
      title: "Chopes",
      items: [
        { name: "Heineken P", price: "9,90" },
        { name: "Heineken G", price: "12,90" },
        { name: "Amstel P", price: "7,90" },
        { name: "Amstel G", price: "9,90" },
      ]
    }
];
