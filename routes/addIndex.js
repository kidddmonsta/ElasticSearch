'use strict'

const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'http://localhost:9200' })

async function run () {
    const { body } = await client.url({
        index: 'patan',
        type: 'indicator_info',
        body: {
            indicator_code: 'absolut_amount_of_contract_order' }
    })

    console.log(body.hits.hits)
}

run().catch(console.log)