const ModelProduto = require('../models/produto');
module.exports =
{
    async Create(req, res)
    {
        try {
            const prod = await ModelProduto.create(
                {
                    Descricao : req.body.Descricao,
                    DataCriacao : req.body.DataCriacao,
                    DataAtualizacao: null
                }
            );
            return res.json(prod);
        }
        catch (erro) {
            return console.error("Error na Create :", erro);
        }
    },
    async List(req,res){
        try{
            const prod = await ModelProduto.findAll();
            return res.json(prod);
        }
        catch(erro){
            return console.error("Erro na List :",erro);
        }
    },
    async GetOne(req,res){
        try{
            const prod = await ModelProduto.findAll({where : {Codigo : req.body.Codigo}});
            return res.json(prod);
        }
        catch(erro){
            return console.error("Erro na List :",erro);
        }
    },
    async Update(req,res){
        try{
            const prod = await ModelProduto.update({
                Descricao : req.body.Descricao,
                DataAtualizacao : req.body.DataAtualizacao
            },
            {where : {Codigo : req.body.Codigo}}
            );
            return res.json(prod)
        }
        catch(erro){
            return console.error("Erro na Update :",erro);
        }
    },
    async Delete(req, res)
    {
        try {
            const prod = await ModelProduto.findByPk(req.body.Codigo);            
            await prod.destroy();
            return res.json("Excluido com sucesso")
        }
        catch (erro) {
            return console.error("Error na Delete :", erro);
        }
    }
}