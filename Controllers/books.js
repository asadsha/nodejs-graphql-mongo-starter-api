import Model from '../Models/Model';

const getBooks = async () => {
	const books = await Model.BookModel.find();
	if (books) {
		return books;
	}
	return {
		error: JSON.stringify('Internal Server Error! Can not get books right now'),
	};
};

const addBook = async args => {
	const { name, author } = args;

	const book = new Model.BookModel({
		name,
		author,
	});
	const savedBook = await book.save();
	if (savedBook) {
		return savedBook;
	}
	return {
		error: JSON.stringify('Internal Server Error! Can not save right now'),
	};
};

const deleteBook = async args => {
	const { id } = args;
	const deletedBook = await Model.BookModel.findByIdAndRemove(id);
	if (deletedBook) {
		return deletedBook;
	}
	return {
		error: JSON.stringify('Internel Server Error! Can not delete right now'),
	};
};

const updateBook = async args => {
	const { id, name, author } = args;
	const query = { $set: { name, author } };
	const updatedBook = await Model.BookModel.findByIdAndUpdate(id, query, {
		new: true,
	});
	if (updatedBook) {
		return updatedBook;
	}
	return {
		error: JSON.stringify('Internel Server Error! Can not update right now'),
	};
};

export default {
	getBooks,
	addBook,
	deleteBook,
	updateBook,
};
