export class CarteHand {
    constructor(card, container){
        this.id = card['id']
        this.uid = card['uid']
        this.cost = card['cost']
        this.hp = card['hp']
        this.baseHP = card['baseHP']
        this.atk = card['atk']
        this.mechanics = card['mechanics']

        this.initCard(container.id)
    }

    initCard(node){
        this.template = document.createElement('div')
        this.template.className = 'card-hand'

        let cardHp = document.createElement('div')
        cardHp.className = 'card-hand-details card-hp'
        cardHp.innerHTML = this.hp
        this.template.append(cardHp)

        let cardAtk = document.createElement('div')
        cardAtk.className = 'card-hand-details card-atk'
        cardAtk.innerHTML = this.atk
        this.template.append(cardAtk)

        let cardCost = document.createElement('div')
        cardCost.className = 'card-hand-details card-cost'
        cardCost.innerHTML = this.cost
        this.template.append(cardCost)

        let cardImg = document.createElement('div')
        cardImg.className = 'card-hand-img'
        this.template.append(cardImg)

        let cardDesc = document.createElement('div')
        cardDesc.className = 'card-hand-desc'
        this.template.append(cardDesc)
        
        document.getElementById(node).append(this.template)
    }

    getTemplate(){ return this.template }

    getCardInfo(){
        return {
            'id' : this.id,
            'uid' : this.uid ,
            'cost' : this.cost,
            'hp' : this.hp,
            'cost' : this.atk,
            'mechanics' : this.mechanics,
        }
    }
}