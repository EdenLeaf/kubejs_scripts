//这一段用于通过工作台合成的方式回复物品耐久度。
ServerEvents.recipes(e => {
    e.shapeless(Item.of("kubejs:knife"), [Ingredient.of("kubejs:knife"), Ingredient.of("iron_ingot")])
        .modifyResult(
            /**
             * @param {Internal.ModifyRecipeCraftingGrid} inventory
             */
            function (inventory, itemStack) {
                let knife_nbt = inventory.find(Item.of("kubejs:knife")).nbt;
              // 如果物品没有损坏，则取消该事件
                if (knife_nbt.get("Damage") == 0)
                    e.cancel()
                itemStack.setDamageValue(knife_nbt.get("Damage") - 1)
                return itemStack
            })
})
