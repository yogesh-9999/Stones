
import Variable from "../model/variable.js";


const getvariable = async (req, res) => {
    try {

        const variable = await Variable.find().distinct('source')
       
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