import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useClothesStore = defineStore('clothes', () => {

    const cart = ref([])
    const clothes = ref([
        {
            id: 1,
            name: 'អាវយឺនសាច់ VIP',
            price: 19.99,
            isFavorite: false,
            image: 'https://scontent.fpnh8-1.fna.fbcdn.net/v/t39.30808-6/480706213_541311958968291_1583890883526996875_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH7OCLDKLj-urGQoGPM7mgf78HzU3I0JajvwfNTcjQlqIZhmGPhiNO-kkOG6VBwFdKHfKlXn2qtggbh2jumZSI7&_nc_ohc=igdAg41KC3AQ7kNvwFT0sXm&_nc_oc=Adk3wOxGT6tpJKZN5rdeYFqay-0NRuPHDLWL18pkJi9tJB5HgipGxPGh7NyXdxvi5J4&_nc_zt=23&_nc_ht=scontent.fpnh8-1.fna&_nc_gid=cvPvV7SYNdY9ifRqqQ6rlQ&oh=00_AfKDR0FO0VhoPIrrTK0wNWO96-NxmikPlG4zNGqrZL3NBA&oe=6839FE9F',
        },
        {
            id: 2,
            name: 'Jeans',
            price: 39.99,
            isFavorite: false,
            image: 'https://scontent.fpnh8-2.fna.fbcdn.net/v/t39.30808-6/480660153_541311602301660_8274265924563342399_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG9pOb4KYv13C0odsJldso4qTOhGJvzKT2pM6EYm_MpPcPAp_B-7E25a7dtJal24l2OunEOLHeu7u59slpXul7R&_nc_ohc=2GJE4bSS78UQ7kNvwEwgbum&_nc_oc=Adl7ijnuQXAM6aUwM94p_55NV61Ig0VBj_tTCE9bhZ5v9ZFEUvEsb1RaVABoI-sr3qw&_nc_zt=23&_nc_ht=scontent.fpnh8-2.fna&_nc_gid=gCOj2JCFqmQs2BbXwG_M1A&oh=00_AfKJjJGccCJ5XcklzzQFJWycsIUVHGMCSDqPnG73bZZzBQ&oe=6839FCD6',
        },
        {
            id: 3,
            name: 'អាវក្រណាត់',
            price: 49.99,
            isFavorite: false,
            image: 'https://scontent.fpnh8-3.fna.fbcdn.net/v/t39.30808-6/480365151_541311585634995_678950838177073569_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEJ7ISE4SFGTnGEC5nLWmeJ0LLtyUNjdQXQsu3JQ2N1Bafxcy_8TyAQzlA61h_QbgLmCEyguk_lObfVzkiVy88t&_nc_ohc=47ug5BqWS8QQ7kNvwFRcvca&_nc_oc=Adli6l7IusaCh-fUHSAPERAAwM3OuoLj-iRMuZedL_LjL6xsDP-EL9s6vZoepFhFwFc&_nc_zt=23&_nc_ht=scontent.fpnh8-3.fna&_nc_gid=jolum6QYuNviNx1n6nNecQ&oh=00_AfKMbqlOY7RJ-Wz8uiu16jGPUdpMooLlqKxKFZhQreKfIQ&oe=683A203D',
        },
        {
            id: 4,
            name: 'Sneakers',
            price: 59.99,
            isFavorite: false,
            image: 'https://scontent.fpnh8-1.fna.fbcdn.net/v/t39.30808-6/480559226_541309805635173_1210858482716929420_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF8_XVHfMw0d5C9EVHdt-PJFuIasbw95fwW4hqxvD3l_BRtUkD_PIhXWjCm6NxGM6QJwt5lbZQcRVfe0a2NboZT&_nc_ohc=6yrtN0n6xZIQ7kNvwGgN1m7&_nc_oc=AdmLEbDumJIYOd3CItHUXW_F9ki9Kv0Lz4H4YcICR8DD3XYSl8WNok1W0hbDQyMECiA&_nc_zt=23&_nc_ht=scontent.fpnh8-1.fna&_nc_gid=g6BBs_NJXGraeclGlV8BPg&oh=00_AfKW46wN8EttAfnv0QBJniKcBiFgXoVzFzKdnNQeAXmssA&oe=683A08E5',
        },
        {
            id: 5,
            name: 'T-Shirt',
            price: 19.99,
            isFavorite: false,
            image: 'https://scontent.fpnh8-1.fna.fbcdn.net/v/t39.30808-6/480706213_541311958968291_1583890883526996875_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH7OCLDKLj-urGQoGPM7mgf78HzU3I0JajvwfNTcjQlqIZhmGPhiNO-kkOG6VBwFdKHfKlXn2qtggbh2jumZSI7&_nc_ohc=igdAg41KC3AQ7kNvwFT0sXm&_nc_oc=Adk3wOxGT6tpJKZN5rdeYFqay-0NRuPHDLWL18pkJi9tJB5HgipGxPGh7NyXdxvi5J4&_nc_zt=23&_nc_ht=scontent.fpnh8-1.fna&_nc_gid=cvPvV7SYNdY9ifRqqQ6rlQ&oh=00_AfKDR0FO0VhoPIrrTK0wNWO96-NxmikPlG4zNGqrZL3NBA&oe=6839FE9F',
        },
        {
            id: 6,
            name: 'Jeans',
            price: 39.99,
            isFavorite: false,
            image: 'https://scontent.fpnh8-3.fna.fbcdn.net/v/t39.30808-6/487915711_573806725718814_6947975737055661057_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeH2jcl150-h65Q3lCpoTKz1XMm2Up09kT9cybZSnT2RP19mY3lyyf9xnkcHEBARInV-9l_GWNwKG9K1T7M-BTKO&_nc_ohc=b1GnS5du-3AQ7kNvwHsoU-O&_nc_oc=AdnMK-5X8VYBAw_PvUC3nOaRZLFBzKwCe9YWPoBcCaoW0D3eb1NbKKnumH6S_afO1BI&_nc_zt=23&_nc_ht=scontent.fpnh8-3.fna&_nc_gid=SxoX40eEFNBmMBj9xGlRkw&oh=00_AfLbFuuiCXfzC0Bojh47kkF8ZHH6pYNgOEmiQq0s8e9b2g&oe=6839F00E',
        },
        {
            id: 7,
            name: 'អាវក្រណាត់',
            price: 49.99,
            isFavorite: false,
            image: 'https://scontent.fpnh8-3.fna.fbcdn.net/v/t39.30808-6/480365151_541311585634995_678950838177073569_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEJ7ISE4SFGTnGEC5nLWmeJ0LLtyUNjdQXQsu3JQ2N1Bafxcy_8TyAQzlA61h_QbgLmCEyguk_lObfVzkiVy88t&_nc_ohc=47ug5BqWS8QQ7kNvwFRcvca&_nc_oc=Adli6l7IusaCh-fUHSAPERAAwM3OuoLj-iRMuZedL_LjL6xsDP-EL9s6vZoepFhFwFc&_nc_zt=23&_nc_ht=scontent.fpnh8-3.fna&_nc_gid=jolum6QYuNviNx1n6nNecQ&oh=00_AfKMbqlOY7RJ-Wz8uiu16jGPUdpMooLlqKxKFZhQreKfIQ&oe=683A203D',
        },
        {
            id: 8,
            name: 'Sneakers',
            price: 59.99,
            isFavorite: false,
            image: 'https://scontent.fpnh8-1.fna.fbcdn.net/v/t39.30808-6/480559226_541309805635173_1210858482716929420_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF8_XVHfMw0d5C9EVHdt-PJFuIasbw95fwW4hqxvD3l_BRtUkD_PIhXWjCm6NxGM6QJwt5lbZQcRVfe0a2NboZT&_nc_ohc=6yrtN0n6xZIQ7kNvwGgN1m7&_nc_oc=AdmLEbDumJIYOd3CItHUXW_F9ki9Kv0Lz4H4YcICR8DD3XYSl8WNok1W0hbDQyMECiA&_nc_zt=23&_nc_ht=scontent.fpnh8-1.fna&_nc_gid=g6BBs_NJXGraeclGlV8BPg&oh=00_AfKW46wN8EttAfnv0QBJniKcBiFgXoVzFzKdnNQeAXmssA&oe=683A08E5',
        },
        {
            id: 9,
            name: 'ស្បែកហាបប្រណាស់',
            price: 45.99,
            isFavorite: false,
            category: 'shoes',
            image: 'https://scontent.fpnh8-2.fna.fbcdn.net/v/t39.30808-6/499931390_616981208068032_5647167958416017730_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF28htfGwzttnQKY8vjtyqYQKbpSfcbqaFApulJ9xupoUDaz99a1iCt3kssWhj1c8GNEAMP7AoUZ1NoRifYnIOO&_nc_ohc=gCH-XiQ8ZwQQ7kNvwGWma5b&_nc_oc=Adndsx-n3pPyX7Obh9Obmh87wPD4Dg9DoKqWnq93n7ZQKVS8hA6RQXbJe0vIBzX350g&_nc_zt=23&_nc_ht=scontent.fpnh8-2.fna&_nc_gid=YuTpCPpmIXaS0Nb3AKIgyw&oh=00_AfI3rSoxXbH0YotV6eZpRjP5iOglM0TPp0xa4RmsiPBxFQ&oe=683B4B71',
        },
        {
            id: 10,
            name: 'ស្បែកជើងកីឡា',
            price: 55.99,
            isFavorite: false,
            category: 'shoes',
            image: 'https://scontent.fpnh8-1.fna.fbcdn.net/v/t39.30808-6/499936791_616981301401356_5783635150945380684_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGFQD1WVfILGdZ27pTQTpvUuYpOs6gt9TK5ik6zqC31MiPL7uCnbbEUPdzimxqoWV1yIH2AziVf_HkNbXOEFcc_&_nc_ohc=9aczQlfX_j4Q7kNvwGQgG0B&_nc_oc=AdkeOFHWSqftEDUI9wxf4ZqFJMVQZCG2oZTUEIKGYim1Dn6ikR0u58xckTeIh2VaCLY&_nc_zt=23&_nc_ht=scontent.fpnh8-1.fna&_nc_gid=s2LS3faEeZviTVJ789Vcmg&oh=00_AfLn-vgN83st6DZ2tlNXQUucrScuw6i28ZuyPd7GFr8_kQ&oe=683B6AC3',
        },
        {
            id: 11,
            name: 'ស្បែកជើងស្ព័រ',
            price: 49.99,
            isFavorite: false,
            category: 'shoes',
            image: 'https://scontent.fpnh8-1.fna.fbcdn.net/v/t39.30808-6/499916348_616981251401361_8528596400863773098_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH663TGy0iJjDvqg1HQe-XFxBQzRjq8jLLEFDNGOryMslX3hev2OqekidJqQLpxOVeFR2szvS9-DFEPKb0M7UaR&_nc_ohc=OPj8n8Z12QAQ7kNvwHLkEDK&_nc_oc=Adky3vuhz7_c1f0s1mNoxpFd9OJ_JnF3I8Lsodj_mPFmPhyV9KPUtPk1Cgcg7EFOLZc&_nc_zt=23&_nc_ht=scontent.fpnh8-1.fna&_nc_gid=J3V4x5rDMXOeC_uBK2Jr3Q&oh=00_AfKNVzR_yUZn4zCgQe-lb2hxiFyd2KGfcexz2Cp1at0GJA&oe=683B49F9',
        },
        {
            id: 12,
            name: 'ស្បែកជើងកីឡា',
            price: 55.99,
            isFavorite: false,
            category: 'shoes',
            image: 'https://scontent.fpnh8-3.fna.fbcdn.net/v/t39.30808-6/499922280_616981201401366_3252763257674963472_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFc4UX5yqcp5BLlhWNiOHXeXslCG9_VKh9eyUIb39UqH2gO1mUHR6f3C3Mrb3liZ-ED_HH1gKVh5IZZJTG7Ngxt&_nc_ohc=BFlXLY5ZNzYQ7kNvwF3O1rx&_nc_oc=AdkYnJmLyBZ8zLflWlclbze3J5hfWDgQVD2yXvoBidzG2LAX-jbPBjqJIxoRYyJ1_5Q&_nc_zt=23&_nc_ht=scontent.fpnh8-3.fna&_nc_gid=_Cjc6Rk78-w-UyaoEqXGBQ&oh=00_AfLrBra0goJovgiFZF6QgYUvziMLhAcPEOjQLDyoETA1ZQ&oe=683B41AF',
        },
        {
            id: 13,
            name: 'ស្បែកជើងកីឡា',
            price: 55.99,
            isFavorite: false,
            category: 'shoes',
            image: 'https://scontent.fpnh8-2.fna.fbcdn.net/v/t39.30808-6/499862712_616981374734682_2789750490454337589_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEquWNJU26dL79aMnI--m-8yciixg-N1vDJyKLGD43W8II992fLmtwfMLlMgi9p-vCxABQyGfRotguhy6__ZjuD&_nc_ohc=XJVjwir65ScQ7kNvwEh4bZH&_nc_oc=AdnJYGrbaNDDcV5DQRapu6RwX_zBVo3byVQLd2Q7YloTBY_rF2SpksaxaDcCiOuLA98&_nc_zt=23&_nc_ht=scontent.fpnh8-2.fna&_nc_gid=db_oycMVZgcwDWkJoyGGYQ&oh=00_AfI41FtJ21mHBVuXamaa_jNV9nWTuWb0FfNH-tWLgB4mkg&oe=683B6480',
        },
        {
            id: 14,
            name: 'ស្បែកជើងកីឡា',
            price: 55.99,
            isFavorite: false,
            category: 'shoes',
            image: 'https://scontent.fpnh8-2.fna.fbcdn.net/v/t39.30808-6/499925644_616981418068011_70416165110308027_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHf5pMqemZRqMcdUPjrlUSvE38LM8NN9CwTfwszw030LKJep-IM3rPl_4-zbV6aFRaazJTCrZ9virJ6IgnTkM3c&_nc_ohc=m-KApJqtjZgQ7kNvwEJuUZi&_nc_oc=AdkwwgU9jwkApNUM0OigQ70frcBbYYe_lA0wEUu63DisaX9KF16tjzPPoxzhkLNQRXA&_nc_zt=23&_nc_ht=scontent.fpnh8-2.fna&_nc_gid=TJzh7IDvKAx-3f1QKdOQ4g&oh=00_AfKA3fjgWBOH-zeS51250UJ2ZFoOs_Ub0V74178b9IKO5g&oe=683B6163',
        },
        {
            id: 15,
            name: 'ស្បែកជើងកីឡា',
            price: 55.99,
            isFavorite: false,
            category: 'shoes',
            image: 'https://scontent.fpnh8-3.fna.fbcdn.net/v/t39.30808-6/499935066_616981454734674_3163094571724065583_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeErMPaTk9m9VXZPcvFBFtu0-u01M4PhNBX67TUzg-E0FQwsrCLPoT1djlICiTSlMwJ5CPjlPzq5BOBEaWyOQwxt&_nc_ohc=LN91Sk0a1c8Q7kNvwF0rO5V&_nc_oc=AdnJbJe2_b85Ab_pTHlyW0BJu_7htqlDCStK0nj7lfZqVns0ZF6ZxrdNDovGI9TJFqQ&_nc_zt=23&_nc_ht=scontent.fpnh8-3.fna&_nc_gid=DlLa0E-nrcyAYmSqyIftYA&oh=00_AfL2EhkGZNF0onqr7lRlJ-vNwmKjCL2it0PAMQRF_2wn6A&oe=683B7829',
        },
        {
            id: 16,
            name: 'ស្បែកជើងកីឡា',
            price: 55.99,
            isFavorite: false,
            category: 'shoes',
            image: 'https://scontent.fpnh8-3.fna.fbcdn.net/v/t39.30808-6/499931155_616981428068010_5714240784982010366_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGrav3fqeH83H-ZT8PRDjoUq_rKHEyJqGer-socTImoZ1L82w-LqmPzmUa7jMD-dJz5Ah9-IzF27uaNFzTWKUYV&_nc_ohc=cq9WfzLYXBAQ7kNvwG_ufnF&_nc_oc=AdnKTgqJjPcAmtvwjWPlr4PgVIKKU99urNI4Ppog0duDAr4n5-UrTf3WxyGZL5zh25g&_nc_zt=23&_nc_ht=scontent.fpnh8-3.fna&_nc_gid=22o--COVZBzP0kqr3Ktwgw&oh=00_AfKWG9ElKh7W36e41a0owpRxTckwqIvTF7fqLXiT7iwlSA&oe=683B4568',
        },
        {
            id: 17,
            name: 'ស្បែកជើងកីឡា',
            price: 55.99,
            isFavorite: false,
            category: 'shoes',
            image: 'https://scontent.fpnh8-2.fna.fbcdn.net/v/t39.30808-6/499921117_616981484734671_4046690244456385083_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGOi26xqfg4z5oZ8PQPNHJMyibTFKwbe_fKJtMUrBt79z3AXSoqMeQpQLvKbdrUP863BrPkUUBmrpLmX0CUbxaY&_nc_ohc=75DtBIynUSQQ7kNvwGff_cB&_nc_oc=Adk31NDb7_Gza9hRxmFtdGkwojs4x2MMHiZRaYBU7kOuMGqCr7bx43zAl1MJQi1afLE&_nc_zt=23&_nc_ht=scontent.fpnh8-2.fna&_nc_gid=kqot209gTBDJuXGBlh0NIg&oh=00_AfKvzkvUS5ohBqsXYWfcrLOrnNc5RxmsyZhtnp9pGxGetg&oe=683B4E3E',
        },
        {
            id: 18,
            name: 'អាវយឺនសាច់​​ VIP',
            price: 55.99,
            isFavorite: false,
            category: 'Shirt',
            image: 'https://scontent.fpnh8-1.fna.fbcdn.net/v/t39.30808-6/480706213_541311958968291_1583890883526996875_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH7OCLDKLj-urGQoGPM7mgf78HzU3I0JajvwfNTcjQlqIZhmGPhiNO-kkOG6VBwFdKHfKlXn2qtggbh2jumZSI7&_nc_ohc=igdAg41KC3AQ7kNvwFT0sXm&_nc_oc=Adk3wOxGT6tpJKZN5rdeYFqay-0NRuPHDLWL18pkJi9tJB5HgipGxPGh7NyXdxvi5J4&_nc_zt=23&_nc_ht=scontent.fpnh8-1.fna&_nc_gid=cvPvV7SYNdY9ifRqqQ6rlQ&oh=00_AfKDR0FO0VhoPIrrTK0wNWO96-NxmikPlG4zNGqrZL3NBA&oe=6839FE9F',
        },
        {
            id: 19,
            name: 'Jeans',
            price: 39.99,
            isFavorite: false,
            category: 'Shirt',
            image: 'https://scontent.fpnh8-2.fna.fbcdn.net/v/t39.30808-6/480660153_541311602301660_8274265924563342399_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG9pOb4KYv13C0odsJldso4qTOhGJvzKT2pM6EYm_MpPcPAp_B-7E25a7dtJal24l2OunEOLHeu7u59slpXul7R&_nc_ohc=2GJE4bSS78UQ7kNvwEwgbum&_nc_oc=Adl7ijnuQXAM6aUwM94p_55NV61Ig0VBj_tTCE9bhZ5v9ZFEUvEsb1RaVABoI-sr3qw&_nc_zt=23&_nc_ht=scontent.fpnh8-2.fna&_nc_gid=gCOj2JCFqmQs2BbXwG_M1A&oh=00_AfKJjJGccCJ5XcklzzQFJWycsIUVHGMCSDqPnG73bZZzBQ&oe=6839FCD6',
        },
        {
            id: 20,
            name: 'អាវក្រណាត់',
            price: 49.99,
            isFavorite: false,
            category: 'Shirt',
            image: 'https://scontent.fpnh8-3.fna.fbcdn.net/v/t39.30808-6/480365151_541311585634995_678950838177073569_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEJ7ISE4SFGTnGEC5nLWmeJ0LLtyUNjdQXQsu3JQ2N1Bafxcy_8TyAQzlA61h_QbgLmCEyguk_lObfVzkiVy88t&_nc_ohc=47ug5BqWS8QQ7kNvwFRcvca&_nc_oc=Adli6l7IusaCh-fUHSAPERAAwM3OuoLj-iRMuZedL_LjL6xsDP-EL9s6vZoepFhFwFc&_nc_zt=23&_nc_ht=scontent.fpnh8-3.fna&_nc_gid=jolum6QYuNviNx1n6nNecQ&oh=00_AfKMbqlOY7RJ-Wz8uiu16jGPUdpMooLlqKxKFZhQreKfIQ&oe=683A203D',
        },
        {
            id: 21,
            name: 'Sneakers',
            price: 59.99,
            isFavorite: false,
            category: 'Shirt',
            image: 'https://scontent.fpnh8-1.fna.fbcdn.net/v/t39.30808-6/480559226_541309805635173_1210858482716929420_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF8_XVHfMw0d5C9EVHdt-PJFuIasbw95fwW4hqxvD3l_BRtUkD_PIhXWjCm6NxGM6QJwt5lbZQcRVfe0a2NboZT&_nc_ohc=6yrtN0n6xZIQ7kNvwGgN1m7&_nc_oc=AdmLEbDumJIYOd3CItHUXW_F9ki9Kv0Lz4H4YcICR8DD3XYSl8WNok1W0hbDQyMECiA&_nc_zt=23&_nc_ht=scontent.fpnh8-1.fna&_nc_gid=g6BBs_NJXGraeclGlV8BPg&oh=00_AfKW46wN8EttAfnv0QBJniKcBiFgXoVzFzKdnNQeAXmssA&oe=683A08E5',
        },
        {
            id: 22,
            name: 'T-Shirt',
            price: 19.99,
            isFavorite: false,
            category: 'Shirt',
            image: 'https://scontent.fpnh8-1.fna.fbcdn.net/v/t39.30808-6/480706213_541311958968291_1583890883526996875_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH7OCLDKLj-urGQoGPM7mgf78HzU3I0JajvwfNTcjQlqIZhmGPhiNO-kkOG6VBwFdKHfKlXn2qtggbh2jumZSI7&_nc_ohc=igdAg41KC3AQ7kNvwFT0sXm&_nc_oc=Adk3wOxGT6tpJKZN5rdeYFqay-0NRuPHDLWL18pkJi9tJB5HgipGxPGh7NyXdxvi5J4&_nc_zt=23&_nc_ht=scontent.fpnh8-1.fna&_nc_gid=cvPvV7SYNdY9ifRqqQ6rlQ&oh=00_AfKDR0FO0VhoPIrrTK0wNWO96-NxmikPlG4zNGqrZL3NBA&oe=6839FE9F',
        },
        {
            id: 23,
            name: 'Jeans',
            price: 39.99,
            isFavorite: false,
            category: 'Shirt',
            image: 'https://scontent.fpnh8-3.fna.fbcdn.net/v/t39.30808-6/487915711_573806725718814_6947975737055661057_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeH2jcl150-h65Q3lCpoTKz1XMm2Up09kT9cybZSnT2RP19mY3lyyf9xnkcHEBARInV-9l_GWNwKG9K1T7M-BTKO&_nc_ohc=b1GnS5du-3AQ7kNvwHsoU-O&_nc_oc=AdnMK-5X8VYBAw_PvUC3nOaRZLFBzKwCe9YWPoBcCaoW0D3eb1NbKKnumH6S_afO1BI&_nc_zt=23&_nc_ht=scontent.fpnh8-3.fna&_nc_gid=SxoX40eEFNBmMBj9xGlRkw&oh=00_AfLbFuuiCXfzC0Bojh47kkF8ZHH6pYNgOEmiQq0s8e9b2g&oe=6839F00E',
        },
        {
            id: 24,
            name: 'អាវក្រណាត់',
            price: 49.99,
            isFavorite: false,
            category: 'Shirt',
            image: 'https://scontent.fpnh8-3.fna.fbcdn.net/v/t39.30808-6/480365151_541311585634995_678950838177073569_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEJ7ISE4SFGTnGEC5nLWmeJ0LLtyUNjdQXQsu3JQ2N1Bafxcy_8TyAQzlA61h_QbgLmCEyguk_lObfVzkiVy88t&_nc_ohc=47ug5BqWS8QQ7kNvwFRcvca&_nc_oc=Adli6l7IusaCh-fUHSAPERAAwM3OuoLj-iRMuZedL_LjL6xsDP-EL9s6vZoepFhFwFc&_nc_zt=23&_nc_ht=scontent.fpnh8-3.fna&_nc_gid=jolum6QYuNviNx1n6nNecQ&oh=00_AfKMbqlOY7RJ-Wz8uiu16jGPUdpMooLlqKxKFZhQreKfIQ&oe=683A203D',
        },
    ]);

    const slides = ref([
        {
            image: 'https://scontent.fpnh8-3.fna.fbcdn.net/v/t39.30808-6/487915711_573806725718814_6947975737055661057_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeH2jcl150-h65Q3lCpoTKz1XMm2Up09kT9cybZSnT2RP19mY3lyyf9xnkcHEBARInV-9l_GWNwKG9K1T7M-BTKO&_nc_ohc=b1GnS5du-3AQ7kNvwHsoU-O&_nc_oc=AdnMK-5X8VYBAw_PvUC3nOaRZLFBzKwCe9YWPoBcCaoW0D3eb1NbKKnumH6S_afO1BI&_nc_zt=23&_nc_ht=scontent.fpnh8-3.fna&_nc_gid=SxoX40eEFNBmMBj9xGlRkw&oh=00_AfLbFuuiCXfzC0Bojh47kkF8ZHH6pYNgOEmiQq0s8e9b2g&oe=6839F00E',
        },
        {
            image: 'https://scontent.fpnh8-1.fna.fbcdn.net/v/t39.30808-6/481064714_545680655198088_3574695497212966562_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeFNB5T-K10bLsaeIIVXaYH_UU3fYy_cM8ZRTd9jL9wzxugkIbILh8uV2AunhgPkiKOJn6Dsdyfbj76H6amQX-4e&_nc_ohc=nNfu0QmsExgQ7kNvwHdUQLm&_nc_oc=Adm5qw1GqJC2KwJDYXonKbgl0QB0_W-KhdjX1Yb-Ei7GqOIVyVUfis_mnYg9QMGVfpo&_nc_zt=23&_nc_ht=scontent.fpnh8-1.fna&_nc_gid=qx5KQ048IzWjuatgfiudSQ&oh=00_AfLw_DSThCb2FRidoVhRM2bUWILFr-Q1SWCWKX1Yy23ipw&oe=6839FD6E',
        },
        {
            image: 'https://scontent.fpnh8-2.fna.fbcdn.net/v/t39.30808-6/476921683_535259029573584_680224919698256668_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeFnoWE_67qjzLOxgxsHjY8vDXKCDSx14yENcoINLHXjIUG22RsgUVIrI-vXCEPB3fSZudd0a3jVvcav6DJv-goV&_nc_ohc=LZO8WFWDLsAQ7kNvwGKdnej&_nc_oc=AdkbNiMdzOYQF6UycdYgomFBZxQwN8jiS8Sd9q2kIflWyd14wDZXQWmEp9msaiRBr3M&_nc_zt=23&_nc_ht=scontent.fpnh8-2.fna&_nc_gid=JsSa53WGzwY5qD7Q396pUQ&oh=00_AfKuzcY5xmIAoKO0-498GHV94eBH4R8CQZnl79_R8kMUag&oe=683A107E',
        },
    ]);

    const cartCount = computed(() => {
        return cart.value.reduce((total, item) => total + item.quantity, 0)
    })

    const toggleFavorite = (item) => {
        const product = clothes.value.find(p => p.id === item.id)
        if (product) {
            product.isFavorite = !product.isFavorite
        }
    }

    const addToCart = (item) => {
        const existingItem = cart.value.find(
            i => i.id === item.id && i.size === item.size && i.color === item.color
        )

        if (existingItem) {
            existingItem.quantity += item.quantity || 1
        } else {
            cart.value.push({
                ...item,
                quantity: item.quantity || 1
            })
        }
    }

    return {
        clothes,
        slides,
        cart,
        cartCount,
        toggleFavorite,
        addToCart
    }
});