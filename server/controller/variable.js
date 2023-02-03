
import Variable from "../model/variable.js";


const getvariable = async (req, res) => {
    try {
        // const variable = await Variable.find()
        const variable = await Variable.find().distinct('source')
        // const sector = await Variable.find().distinct('sector');
        // const topic = await Variable.find().distinct('topics');
        // const region = await Variable.find().distinct('region');
        // const pestle = await Variable.find().distinct('pestle');
        // const country = await Variable.find().distinct('country');
        res.status(200).json(variable)
    } catch (error) {
        console.log(error);

    }
}

const getvariablecount = async (req, res) => {
    try {

        const variable = await Variable.aggregate([
            {
                $match: {
                    keywords: { $not: { $size: 0 } }
                }
            },
            { $unwind: "$end_year" },
            {
                $group: {
                    _id: { $toLower: '$end_year' },
                    count: { $sum: 1 }
                }
            },
            {
                $match: {
                    count: { $gte: 2 }
                }
            },
            { $sort: { count: -1 } },
            { $limit: 100 }
        ]);;

        res.status(200).json(variable)
    } catch (error) {
        console.log(error);

    }
}


export { getvariable, getvariablecount };