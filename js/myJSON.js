var app = angular.module('myApp', []);
app.controller('bookController', function($scope){
    $scope.book=[
    {
        'isbn': 0142000655,
		'title': 'East of Eden',
	    'author': 'John Steinbeck',
	    'genre': 'Historical Fiction',
        'publisher': 'Penguin Books',
		'published': 2002,
		'borrower':[
		{
			'name': 'Tsvetoslav Dimov',
			'borrowDate': '12.12.2012'
		},
		{
			'name': 'Ivan Dimov',
			'borrowDate': '25.10.2013'
		}
		]
    },
    {
        'isbn': 0393312836,
		'title': 'A Clockwork Orange',
	    'author': 'Anthony Burgess',
		'genre': 'Science Fiction',
	    'publisher': 'Penguin Classics',
	    'published': 2000,
		'borrower':[
		{
			'name': 'Niamh Power',
			'borrowDate': '01.12.2001'
		},
		{
			'name': 'Tsvetoslav Dimov',
			'borrowDate': '12.12.2012'
		},
		{
			'name': 'Sandra Baggins',
			'borrowDate': '20.11.2002'
		}
		]
    },
	{
        'isbn': 0553573527,
		'title': 'Empire of the Ants',
	    'author': 'Bernard Werber',
		'genre': 'Science Fiction',
	    'publisher': 'Bantam',
	    'published': 1999,
		'borrower':[
		{
			'name': 'John Doe',
			'borrowDate': '26.07.1999'
		},
		{
			'name': 'Sandra Baggins',
			'borrowDate': '01.04.2009'
		},
		{
			'name': 'Tsvetoslav Dimov',
			'borrowDate': '12.12.2012'
		},
		{
			'name': 'Anna Ginger',
			'borrowDate': '20.04.2014'
		}
		]
    },
    {
        'isbn': 0747263744,
		'title': 'American Gods',
	    'author': 'Neil Gaiman',
		'genre': 'Fantasy',
	    'publisher': 'HarperTorch',
		'published': 2002,
		'borrower':[
		{
			'name': 'Gordon Walsh',
			'borrowDate': '15.07.2004'
		},
		{
			'name': 'Anna Ginger',
			'borrowDate': '20.04.2014'
		}
		]
    }
  ]

  $scope.insertInfo = function (info) {
        $scope.book.push(info);
        $('#ModalForm').modal('hide');
        $scope.bookInfo = {};
}

  $scope.addBorrowers = function (b) {
       this.detail.borrower.push(b);
       $('#BorrowersForm').modal('hide');
}
});
