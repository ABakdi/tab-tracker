const {Song} = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op;
module.exports = {

    async index(req, res){
        try{
            let songs = null
            const search = req.query.search
            if(search){
                songs = await Song.findAll({
                    where: {
                        [Op.or]: [
                            'title', 'album' ,'genre', 'artist'
                        ].map(
                            key =>({
                                [key]:{
                                    [Op.like]: `%${search}%`
                                }
                            }))
                    }
                })
                res.send(songs)
            }else{
                songs = await Song.findAll({
                    limit: 10
                })
                res.send(songs)
            }
        }catch (err){
            res.status(500).send({
                error: 'Fetch error ',
                err:err
            })
        } 
        
    },

    async show(req, res){
        try{
            console.log(req.params.songId)
            const song = await Song.findByPk(req.params.songId)
            res.send(song)
        } catch (err){
            res.status(500).send({
                error: 'Fetch error '
            })
        }
    },



   async post(req, res){
        try{
            const song = await Song.create(req.body)
            res.send(song)
        } catch (err){
            res.status(500).send({
                error: 'Creation error'
            })
        }
    },

    async update(req, res){
        try{
            const song = await Song.update(req.body,
                {
                    where:{
                        id : req.params.songId
                    }
                })
            res.send(song)
        } catch (err){
            res.status(500).send({
                error: 'Creation error'
            })
        }
    }
}