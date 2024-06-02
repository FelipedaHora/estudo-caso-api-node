class CustomersController {

    constructor() {
        this.index = this.index.bind(this);
        this.show = this.show.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.destroy = this.destroy.bind(this);

        this.customers = [
            {
                id: 1,
                name: 'John Doe',
                site: 'https://github.com/',
            },
            {
                id: 2,
                name: 'Jane Doe',
                site: 'https://google.com',
            },
            {
                id: 3,
                name: 'John Doe',
                site: 'https://facebook.com',
            },
        ];
    }

    async index(req, res) {
        return res.json(this.customers);
    }
    async show(req, res) {
        const id = parseInt(req.params.id);
        const customer = this.customers.find(c => c.id === id);
        const status = customer ? 200 : 404;

        return res.status(status).json(customer);
    }
    async create(req, res) {
        const { name, site } = req.body;
        const id = this.customers[this.customers.length - 1].id + 1;

        const newCostumer = {
            id,
            name,
            site
        }
        this.customers.push(newCostumer);
        return res.status(201).json(newCostumer);
    }
    async update(req, res) {
        const id = parseInt(req.params.id);
        const { name, site } = req.body;

        const index = this.customers.findIndex(c => c.id === id);
        const status = index >= 0 ? 200 : 404;

        if(index >= 0) {
            this.customers[index] = {
                id,
                name,
                site
            };
        }
        return res.status(status).json(this.customers[index]);
    }
    async destroy(req, res) {
        const id = parseInt(req.params.id);
        const index = this.customers.findIndex(c => c.id === id);

        const status = index >= 0 ? 204 : 404;

        if(index >= 0) {
            this.customers.splice(index, 1);
        }
        return res.status(status).json();
    }

}

export default new CustomersController();