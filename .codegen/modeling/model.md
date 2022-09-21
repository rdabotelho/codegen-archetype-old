entity UserSystem (label: 'User System') {
	string firstName (label: 'First Name')
	string lastName (label: 'Last Name')
	number age
	State state
}

enum State {
	ACTIVE
	INACTIVE
	CANCELAD
}